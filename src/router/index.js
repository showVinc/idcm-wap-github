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
    }
  ]
})
