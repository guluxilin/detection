import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/Sort/LayOut'
import AbnormalPrice from '@/components/Price/AbnormalPrice'
import AbnormalSale from '@/components/Sale/AbnormalSale'
import HomeManage from '@/components/Home/HomeManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sort'
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
