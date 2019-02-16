import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/EditArticle.vue'),
      meta: { title: '登录', isLogin: false }
    },
    {
      path: '/editArticle',
      name: 'editArticle',
      component: () => import('../views/EditArticle.vue'),
      meta: { title: '登录', isLogin: false }
    }
  ]
})

export default router
