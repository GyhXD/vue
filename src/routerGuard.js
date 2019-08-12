import router from '@/router/index'
router.beforeEach((to, from, next) => {
  console.log('路由守卫', to)
  next()
})
