import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import My from '@/pages/my/My'
import Cash from '@/pages/my/Cash'
import Btcshow from '@/pages/my/Btcshow'
import Dollarshow from '@/pages/my/Dollarshow'
import Rmbshow from '@/pages/my/Rmbshow'
import Gywm from '@/pages/my/Gywm'
import Gywmdetail from '@/pages/my/Gywmdetail'
import Security from '@/pages/my/Security'

//交易
import History from '@/pages/business/history'
//新闻资讯
import Message from '@/pages/message/message'
import Detail from '@/pages/message/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/my/cash',
      name: 'Cash',
      component: Cash
    },
    {
      path: '/my/btcshow',
      name: 'Btcshow',
      component: Btcshow
    },
    {
      path: '/my/dollarshow',
      name: 'Dollarshow',
      component: Dollarshow
    },
    {
      path: '/my/rmbshow',
      name: 'Rmbshow',
      component: Rmbshow
    },
    {
      path: '/my/gywm',
      name: 'Gywm',
      component: Gywm
    },
    {
      path: '/my/gywmdetail',
      name: 'Gywmdetail',
      component: Gywmdetail
    },
    {
      path: '/my/security',
      name: 'Security',
      component: Security
    },
    // {
    //   path: '/business',
    //   name: 'Business',
    //   component: Business
    // },
    {
      path: '/business/history',
      name: 'History',
      component: History
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/message/detail',
      name: 'Message/Deatil',
      component: Detail
    }
  ]
})
