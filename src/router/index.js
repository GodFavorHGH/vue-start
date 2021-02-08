import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import home from '@/components/home'

Vue.use(Router)
export const asyncRouterMap = []
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/home',
      name:'home',
      component:home
    }
  ]
})
