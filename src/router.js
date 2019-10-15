import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/index.vue'
import Layout from '@/components/Layout'
import Home from '@/views/home'
import Member from '@/views/member'
import Supplier from '@/views/supplier'
import Goods from '@/views/goods'
import Staff from '@/views/staff'

Vue.use(Router)

export default new Router({
   routes: [
    {
      path: '/login',
      name: 'login',//路由名称
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
          meta: { title: '首页'}
        },
        // {
        //   path: '/member',
        //   component: Home,
        //   meta: { title: '首页'}
        // },
      ]
    },
    {
      path: '/member',
      component: Layout,
      children: [
        {
          path: '/member/',
          component: Member,
          meta: { title: 'member'}
        }
      ]
    },
    {
      path: '/supplier',
      component: Layout,
      children: [
        {
          path: '/supplier/',
          component: Supplier,
          meta: { title: 'supplier'}
        }
      ]
    },
    {
      path: '/goods',
      component: Layout,
      children: [
        {
          path: '/goods/',
          component: Goods,
          meta: { title: 'goods'}
        }
      ]
    },
    {
      path: '/staff',
      component: Layout,
      children: [
        {
          path: '/staff/',
          component: Staff,
          meta: { title: 'staff'}
        }
      ]
    },
  ]
})
