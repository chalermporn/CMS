import axios from 'axios'
import store from '@/store'

export default {

  getMenu () {
    return new Promise((resolve) => {
      axios.get('/cti/data/menu.html').then(r => r.data).then((r) => {
        store.dispatch('menu', r)
        resolve(true)
      }).catch(() => {
        resolve(false)
      })
    })
  },

  getPage (id) {
    return new Promise((resolve) => {
      axios.get('/cti/data/' + id + '.html').then(r => r.data).then((r) => {
        resolve(r)
      }).catch(() => {
        resolve(false)
      })
    })
  }
}
