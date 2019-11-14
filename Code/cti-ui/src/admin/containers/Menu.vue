<template>
  <div class="home">
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Menu Editor</h1>
      </div>
    </div>

    <b-alert variant="danger" v-if="showError" show>Unknown error occured. Changes hasn't been saved</b-alert>
    <b-alert variant="success" v-if="showSuccess" show>Changes has been saved</b-alert>

    <div class="content">
      <ckeditor
        v-model="menu"
        :editor="editorConstructor"
        :config="editorConfig"
        :disabled="editorDisabled"
        @ready="ready"
      />
    </div>

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
    menu: {
      get () {
        return this.$store.state.menu
      },
      set (val) {
        this.$store.dispatch('menu', val)
      }
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

    ready (editorInstance) {
      this.editorDisabled = false
      this.editorData = this.menu
    },
    async save () {
      var result = await AdminService.saveMenu(this.menu)
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
</style>
