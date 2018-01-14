import Vue from 'vue'
import Router from 'vue-router'
import VueCarousel from 'vue-carousel';
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueCarousel)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
