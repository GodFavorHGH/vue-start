import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import home from '@/components/home'
import personCenter from '@/components/personCenter'
import eventMgmt from '@/components/eventMgmt'
import journalCenter from '@/components/journalCenter'
import accountingMgmt from '@/components/accountingMgmt'
import accountMgmt from '@/components/accountMgmt'

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
    },
    {
      path:'/personCenter',
      name:'personCenter',
      component:personCenter
    },
    {
      path:'/eventMgmt',
      name:'eventMgmt',
      component:eventMgmt
    },
    {
      path:'/journalCenter',
      name:'journalCenter',
      component:journalCenter
    },
    {
      path:'/accountingMgmt',
      name:'accountingMgmt',
      component:accountingMgmt
    },
    {
      path:'/accountMgmt',
      name:'accountMgmt',
      component:accountMgmt
    }
  ]
})
