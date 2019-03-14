import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/404'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '*',
      name: '404',
      component: Error404
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history'
})
