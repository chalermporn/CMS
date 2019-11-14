<template>
  <div class="home">
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <div v-html="menu"></div>
      </div>
    </div>

    <b-alert variant="danger" v-if="showError" show>Unknown error occured. Changes hasn't been saved</b-alert>
    <b-alert variant="success" v-if="showSuccess" show>Operation was successful</b-alert>

    <div class="content" v-if="isIndex()">
      <ckeditor
        v-model="editorData"
        :editor="editorConstructor"
        :config="editorConfig"
        :disabled="editorDisabled"
        @ready="ready"
      />
    </div>
    <div v-else class="content page">
      <ckeditor
        v-model="editorData"
        :editor="editorConstructor"
        :config="editorConfig"
        :disabled="editorDisabled"
        @ready="ready"
      />
    </div>

    <b-button class="start-btn" size="lg" variant="danger" @click="remove">Delete this page</b-button>
    <b-button class="start-btn" size="lg" variant="success" @click="save">Save</b-button>
    <b-button class="start-btn" size="lg" variant="info" @click="close">Close Editor</b-button>
  </div>
</template>

<script>

import CKEditor from '@ckeditor/ckeditor5-vue'
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor'
import AdminService from '@/admin/services/admin.service'
import router from '@/router'

import CommonService from '@/service'

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials'
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link'
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Headinglugin from '@ckeditor/ckeditor5-heading/src/heading'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold'
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic'
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import ListPlugin from '@ckeditor/ckeditor5-list/src/list'
import Font from '@ckeditor/ckeditor5-font/src/font'

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image'
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'

import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'

export default {
  name: 'Editor',
  components: { ckeditor: CKEditor.component },
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      showError: false,
      showSuccess: false,
      editorConstructor: InlineEditor,
      editorDisabled: true,
      editorData: null,
      editorConfig: {
        plugins: [
          EssentialsPlugin,
          BlockQuotePlugin,
          Headinglugin,
          Alignment,
          Font,
          BoldPlugin,
          ItalicPlugin,
          ParagraphPlugin,
          ListPlugin,
          LinkPlugin,
          Base64UploadAdapter,
          UploadAdapterPlugin,
          ImagePlugin,
          ImageCaptionPlugin,
          ImageStylePlugin,
          ImageToolbarPlugin,
          ImageUploadPlugin,
          ImageResize,
          Table,
          TableToolbar
        ],
        toolbar: {
          items: [
            'heading',
            'bold',
            'italic',
            'link',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            'undo',
            'redo',
            'bulltedList',
            'numberedList',
            'blockQuote',
            'imageUpload',
            'alignment',
            'insertTable'
          ]
        },
        image: {
          toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
          ]
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        }
      }
    }
  },
  computed: {
    menu () {
      return this.$store.state.menu
    }
  },
  watch: {
    $route (to, from) {
      this.getData()
    }
  },
  async beforeRouteEnter (to, from, next) {
    var auth = await AdminService.isLoggedIn()
    if (auth === false) {
      router.push({ path: '/' })
    } else {
      await CommonService.getMenu()
      next()
    }
  },
  methods: {
    close () {
      router.push({ path: '/' })
    },
    isIndex () {
      return !this.id || this.id === 'index'
    },
    edit () {
      router.push({ path: '/edit' })
    },
    logout () {
      AdminService.logout()
      router.push({ path: '/' })
    },
    ready (editorInstance) {
      this.editorDisabled = false
      this.getData()
    },
    async getData () {
      var id = this.id
      if (!id) id = 'index'
      try {
        var result = await CommonService.getPage(id)
        if (result === false) {
          router.push({ path: '/404' })
          return
        }
        this.editorData = result
      } catch (ex) {
        router.push({ path: '/404' })
      }
    },
    async save () {
      var result = await AdminService.savePage(this.id, this.editorData)
      if (result) {
        this.showError = false
        this.showSuccess = true
      } else {
        this.showError = true
        this.showSuccess = false
      }

      setTimeout(() => {
        this.showError = false
        this.showSuccess = false
      }, 3000)
    },
    async remove () {
      this.$bvModal.msgBoxConfirm('Do you want to remove this page? This can not be undone!').then(async (confirm) => {
        if (confirm) {
          var result = await AdminService.removePage(this.id)
          if (result) {
            this.showError = false
            this.showSuccess = true
          } else {
            this.showError = true
            this.showSuccess = false
          }
          setTimeout(() => {
            this.showError = false
            this.showSuccess = false
            router.push({ path: '/' })
          }, 3000)
        }
      })
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
.jumbotron{
  text-align: left;
  color: white !important;
}
.jumbotron a{
  color: white !important;
}
.btn {
    margin-right: 20px;
}
.start-btn {
  margin-top: 40px;
}
table {
  width: 100%;
  margin: 40px;
  margin-top: 100px;
  text-align: left;
}
.img {
  margin-left: 20px;
}
.text {
  margin-right: 20px;
}
.content {
  margin-left: 40px;
  margin-right: 40px;
}
.page {
  background-color: #e5e5e5 !important;
  min-height: 700px;
  padding: 20px;
  box-shadow: 2px 2px grey;
}

</style>
