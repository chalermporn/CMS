import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './admin/containers/Home.vue'
import Login from './admin/containers/Login.vue'
import Dashboard from './admin/containers/Dashboard.vue'
import Editor from './admin/containers/Editor.vue'
import Create from './admin/containers/Create.vue'
import Menu from './admin/containers/Menu.vue'
import View from './site/containers/View.vue'
import Page404 from './admin/containers/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/edit',
    name: 'edit',
    component: Editor
  },
  {
    path: '/create',
    name: 'edit',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Editor,
    props: true
  },
  {
    path: '/page/:id',
    name: 'page',
    component: Editor,
    props: true
  },
  {
    path: '/site/',
    name: 'index',
    component: View,
    props: true
  },
  {
    path: '/site/:id',
    name: 'site',
    component: View,
    props: true
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '404',
    component: Page404
  },
  {
    path: '*',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
