import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import myRoot from '@/views/myRoot/myRoot'
import planeList from '@/views/planeList/planeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/myRoot',
      name: 'myRoot',
      component: myRoot
    },
    {
      path: '/planeList',
      name: 'planeList',
      component: planeList
    }
  ]
})
