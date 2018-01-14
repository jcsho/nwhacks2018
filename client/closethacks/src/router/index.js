import Vue from 'vue'
import Router from 'vue-router'
import VueCarousel from 'vue-carousel'
import Home from '@/components/Home'
// TODO needs to be changed to closet component
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(VueCarousel)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // TODO change HelloWorld to Closet
    {
      path: '/closet',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
