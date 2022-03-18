import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/Sort/LayOut'
import AbnormalPrice from '@/components/Price/AbnormalPrice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sort'
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
    }
  ]
})
