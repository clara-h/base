import Vue from 'vue'
import Router from 'vue-router'
import home from '@/router/home'

// 1、安装插件
Vue.use(Router)

const routes = [...home]

// 2、创建router
const router = new Router({
  routes,
  mode: 'history'
})

export default router
