<template>
  <div class="home">
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <div v-html="menu"></div>
      </div>
    </div>

    <div class="content" v-if="isIndex()">
      <div v-html="page"></div>
    </div>
    <div v-else class="content page">
      <div v-html="page"></div>
    </div>

    <b-button class="start-btn" size="lg" variant="info" @click="close">Close Viewer</b-button>
  </div>
</template>

<script>

import router from '@/router'

import CommonService from '@/service'

export default {
  name: 'ViewSite',
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      page: ''
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
    await CommonService.getMenu()
    next()
  },
  methods: {
    isIndex () {
      return !this.id || this.id === 'index'
    },
    close () {
      router.push({ path: '/' })
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
        this.page = result
      } catch (ex) {
        router.push({ path: '/404' })
      }
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
