import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/base.css'
import router from '@/router'
Vue.config.productionTip = false

import FastClick from 'fastclick'
// 安装3.0版本会报错，建议安装低版本
import VueLazyload from 'vue-lazyload'

import toast from '@/components/common/toast'
Vue.use(toast)

// 解决移动端300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body
    )
  }, false);
}

// 使用图片懒加载的插件
Vue.use(VueLazyload, {
  loading: '', // 放入加载中的图片，用require引入
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
