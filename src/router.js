import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'src/components/Hello'
import About from 'src/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/about',
      component: About
    }
  ]
})
