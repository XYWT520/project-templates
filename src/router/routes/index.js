export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta:{
      name:'主页'
    },
    component: () => import('../../views/home.vue')
  },
  {
    path: '/testFile',
    name: 'testFile',
    meta:{
      name:'测试文件'
    },
    component: () => import('../../views/testFile/testFile.vue')
  }
]