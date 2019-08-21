import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import planeList from '@/views/planeList/planeList'
import chooseCity from '@/views/chooseCity/chooseCity'
import plane from '@/views/plane/plane'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        index: 0
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/home'),
          meta: {
            index: 0
          }
        },
        {
          path: '/myRoot',
          name: 'myRoot',
          component: () => import('@/views/myRoot/myRoot2'),
          meta: {
            index: 1
          }
        }
      ]
    },
    {
      // 日历
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/components/calendar/calendar'),
      meta: {
        index: 2
      }
    },
    {
      // 机票
      path: '/plane',
      name: 'plane',
      component: plane,
      meta: {
        index: 1
      }
    },
    {
      path: '/chooseCity',
      name: 'chooseCity',
      component: chooseCity,
      meta: {
        index: 2
      }
    },
    {
      path: '/planeList',
      name: 'planeList',
      component: planeList,
      meta: {
        index: 2
      }
    },
    {
      path: '/planeDetail',
      name: 'planeDetail',
      component: () => import('@/views/planeDetail/planeDetail'),
      meta: {
        index: 2
      }
    }
  ]
})
