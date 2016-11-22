import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'
/* eslint-disable no-new */

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)


// 路由
const routes = [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/time-entries',
    component: TimeEntries,
    children: [
      {
        path:'log-time',
        component: LogTime
      }
    ]
  }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router,
  components: {
    app: App
  }
}).$mount('#app')
