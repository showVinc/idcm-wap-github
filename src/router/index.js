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

import Login from '@/pages/login/login'         //  登录
import Register from '@/pages/login/register'    //  注册
import Findpass from '@/pages/login/findpass'    //  找回密码
import EmailPass1 from '@/pages/login/emailpass-1'   //  邮箱找回密码第一步
import EmailPass2 from '@/pages/login/emailpass-2'   //  邮箱找回密码 第二步
import MobilePass1 from '@/pages/login/mobilepass-1'  //  手机找回密码 第一步
import MobilePass2 from '@/pages/login/mobilepass-2'   //  手机找回密码 第二步
import Result from '@/pages/login/result'     //  找回密码成功后的提示

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
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/findpass',
      name: 'findpass',
      component: Findpass
    },
    {
      path: '/emailpassstep1',
      name: 'emailpassstep1',
      component: EmailPass1
    },
    {
      path: '/emailpassstep2',
      name: 'emailpassstep2',
      component: EmailPass2
    },
    {
      path: '/mobilepassstep1',
      name: 'mobilepassstep1',
      component: MobilePass1
    },
    {
      path: '/mobilepassstep2',
      name: 'mobilepassstep2',
      component: MobilePass2
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
