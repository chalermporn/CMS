<template>
  <div class="home">
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">404 - We hit a snag!</h1>
        <p class="lead my-3"></p>
        <p class="lead my-3">This page has been removed or is not yet created</p>
        <b-button class="start-btn" size="lg" variant="primary" @click="edit">Edit Content</b-button>
        <b-button class="start-btn" size="lg" variant="info " @click="menu">Edit Menu</b-button>
        <b-button class="start-btn" size="lg" variant="success " @click="create">Create Page</b-button>
        <b-button class="start-btn" size="lg" variant="warning" @click="logout">Logout</b-button>
      </div>
    </div>
    <table>
      <tr>
        <td width="60%">
          <h4>Create! Transform! Improve!</h4>
          <p>What is C.T.I. CMS? This system allows you to create your website without coding</p>
          <div class="text">
            <span>This system will allow you to create a website to solve exactly your tasks.<br> C.T.I. CMS is a convenient and functional service for creating high-quality sites.  Without knowledge of special technologies, you can get a website with a unique design, original content, convenient modules and the absence of vulnerabilities. You have a clear interface, easy editing mode and ready-made templates at your service . You do not need any experience in a web development, you only need some time and your flight of imagination.</span>
          </div>
        </td>
        <td width="40%">
          <div class="img">
            <img src="@/assets/home.png" />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import AdminService from '@/admin/services/admin.service'
import router from '@/router'

export default {
  name: 'Page404',
  async beforeRouteEnter (to, from, next) {
    var auth = await AdminService.isLoggedIn()
    if (auth === false) {
      router.push({ path: '/' })
    } else {
      next()
    }
  },
  methods: {
    create () {
      router.push({ path: '/create' })
    },
    edit () {
      router.push({ path: '/edit' })
    },
    menu () {
      router.push({ path: '/menu' })
    },
    logout () {
      AdminService.logout()
      router.push({ path: '/' })
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
</style>
