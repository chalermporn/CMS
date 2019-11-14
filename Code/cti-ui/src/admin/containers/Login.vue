<template>
  <div class="login">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Username</label>
      <b-alert variant="danger" v-if="showError" show>Incorrect credentials</b-alert>
      <b-alert variant="success" v-if="showSuccess" show>You are logged in</b-alert>
      <input
        type="email"
        id="inputUser"
        class="form-control"
        placeholder="Username"
        v-model="username"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        v-model="password"
        placeholder="Password"
        required
      />

      <button class="btn btn-lg btn-primary btn-block" @click="login" type="button">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2019 Hanna Hayrylava</p>
    </form>
  </div>
</template>

<script>

import AdminService from '@/admin/services/admin.service'
import router from '@/router'

export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null,
      showError: false,
      showSuccess: false
    }
  },
  async beforeRouteEnter (to, from, next) {
    var auth = await AdminService.isLoggedIn()
    if (auth === false) {
      next()
    } else {
      router.push({ path: '/dashboard' })
    }
  },
  methods: {
    async login () {
      var result = await AdminService.login({ username: this.username, password: this.password })
      if (result) {
        this.showError = false
        this.showSuccess = true
        setTimeout(() => { router.push({ path: '/dashboard' }) }, 2000)
      } else {
        this.showError = true
      }
    }
  }
}
</script>
<style scoped>

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
.login {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  margin-top: 200px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
