// 主页
const home = () => import('@/views/home')
const detail = () => import('@/views/detail')

export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
]
