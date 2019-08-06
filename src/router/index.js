import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Biblioteca from '@/pages/Biblioteca'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/biblioteca',
      name: 'Biblioteca',
      component: Biblioteca,
      meta: {
        title: 'Biblioteca'
      }
    }
  ],
})
