import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import Home from '@/components/Home'
import Closet from '@/components/Closet'
import Filter from '@/components/Filter'

Vue.use(Router);
Vue.use(Resource);
Vue.use(VueCarousel)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/closet',
      name: 'Closet',
      component: Closet
    }
  ]
})
