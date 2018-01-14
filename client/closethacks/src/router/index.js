import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
