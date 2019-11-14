import axios from 'axios'
import store from '@/store'

export default {

  login (credentials) {
    return new Promise((resolve) => {
      axios.post('/cti/auth/login', { ...credentials }).then(r => r.data).then((r) => {
        store.dispatch('login', r.access_token)
        axios.interceptors.request.use(function (config) {
          config.headers = {
            'Authorization': 'Bearer ' + r.access_token
          }
          return config
        })
        resolve(true)
      }).catch(() => {
        resolve(false)
      })
    })
  },

  saveMenu (menu) {
    return new Promise((resolve) => {
      axios.post('/cti/menu/save', { menu }).then(r => r.data).then((r) => {
        if (r === true) {
          resolve(true)
        } else {
          resolve(false)
        }
      }).catch(() => {
        resolve(false)
      })
    })
  },

  savePage (id, page) {
    return new Promise((resolve) => {
      axios.post('/cti/content/save', { id, page }).then(r => r.data).then((r) => {
        if (r === true) {
          resolve(true)
        } else {
          resolve(false)
        }
      }).catch(() => {
        resolve(false)
      })
    })
  },

  removePage (id) {
    return new Promise((resolve) => {
      axios.post('/cti/content/delete', { id }).then(r => r.data).then((r) => {
        if (r === true) {
          resolve(true)
        } else {
          resolve(false)
        }
      }).catch(() => {
        resolve(false)
      })
    })
  },

  createPage (id, page) {
    return new Promise((resolve) => {
      axios.post('/cti/content/create', { id, page }).then(r => r.data).then((r) => {
        if (r === true) {
          resolve(true)
        } else {
          resolve(false)
        }
      }).catch(() => {
        resolve(false)
      })
    })
  },

  logout () {
    store.dispatch('logout')
  },

  async isLoggedIn () {
    var token = localStorage.getItem('auth')
    if (token !== null) {
      axios.interceptors.request.use(function (config) {
        config.headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('auth')
        }
        return config
      })
      try {
        var result = await axios.get('cti/auth/valid').then(r => r.data)
        if (result) return true
        else return false
      } catch (e) {
        store.dispatch('logout')
        return false
      }
    } else {
      store.dispatch('logout')
      return false
    }
  }

}
