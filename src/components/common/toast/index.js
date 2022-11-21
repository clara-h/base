import toast from '@/components/common/toast/Toast'
const obj = {}

obj.install = function (Vue) {
  // 1、创建组件构造器
  const toastContrustor = Vue.extend(toast)
  // 2、new的方式，根据组件构造器，可以创建出来一个组件对象
  const toastDom = new  toastContrustor
  // 3、将组件对象，手动挂载到某个元素上
  toastDom.$mount(document.createElement('div'))
  // 4、toast.$el对应的就是div，在body上创建
  document.body.appendChild(toastDom.$el)

  Vue.prototype.$toast = toastDom
}

export default obj
