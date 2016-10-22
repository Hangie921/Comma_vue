import VueRouter from 'vue-router'
const subPage = {
  template: '<router-view></router-view>'
}

export default class extend VueRouter {
  constructor (arg) {
    super(arg) // call super() so 'this' keyword can be used
    this.map({
      '/': {
        component: './pages/index.vue'
      }
    })
  }
}