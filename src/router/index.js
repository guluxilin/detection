import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/Sort/LayOut'
import AbnormalPrice from '@/components/Price/AbnormalPrice'
import AbnormalSale from '@/components/Sale/AbnormalSale'
import HomeManage from '@/components/Home/HomeManage'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/sort',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: HomeManage
    },
    {
      path: '/price',
      name: 'price',
      component: AbnormalPrice
    },
    {
      path: '/sort',
      name: 'sort',
      component: LayOut
    },
    {
      path: '/sale',
      name: 'sale',
      component: AbnormalSale
    }
  ]
})
