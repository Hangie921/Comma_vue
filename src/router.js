import Vue from 'vue'
import Router from 'vue-router'
import Index from 'src/pages/Index'
import About from 'src/pages/About'
import Exhibition from 'src/pages/Exhibition'
import QA from 'src/pages/QA'
import Calendar from 'src/pages/Calendar'
import Site from 'src/pages/Site'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/exhibition',
      component: Exhibition
    },
    {
      path: '/qa',
      component: QA
    },
    {
      path: '/site',
      component: Site
    },
    {
      path: '/calendar',
      component: Calendar
    }
  ]
})
