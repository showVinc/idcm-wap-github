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
import Btcrecord from '@/pages/my/Btcrecord'
import Setting from '@/pages/my/Setting'
import Opinion from '@/pages/my/Opinion'
import Account from '@/pages/my/Account'
import User from '@/pages/my/User'
import Notice from '@/pages/my/Notice'
import Number from '@/pages/my/Number'

//交易
import History from '@/pages/business/history'
//新闻资讯
import Message from '@/pages/message/message'
import Detail from '@/pages/message/detail'

import Login from '@/pages/login/login'         //  登录
import Register from '@/pages/login/register'    //  注册
import Findpass from '@/pages/login/findpass'    //  找回密码
import EmailPass1 from '@/pages/login/emailpass-1'   //  邮箱找回密码第一步
import EmailPass2 from '@/pages/login/emailpass-2'   //  邮箱找回密码 第二步
import MobilePass1 from '@/pages/login/mobilepass-1'  //  手机找回密码 第一步
import MobilePass2 from '@/pages/login/mobilepass-2'   //  手机找回密码 第二步
import Result from '@/pages/login/result'     //  找回密码成功后的提示
import SecurityIndex from '@/pages/security/set'   //  安全中心 -- 首页
import SecurityCertify from '@/pages/security/certify'  // 安全中心 -- 实名认证
import SecirityEmail from '@/pages/security/email'  // 安全中心 -- 绑定邮箱
import SecurityLoginPass from '@/pages/security/loginpass'  // 安全中心 -- 修改登录密码
import SecurityExchangePass from '@/pages/security/exchangepass'  // 安全中心 -- 修改交易密码
import SecurityMobile from '@/pages/security/mobile'  // 安全中心 -- 修改绑定手机


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
      // {
      //   path: '/business',
      //   name: 'Business',
      //   component: Business
      // },
    },
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
      component: Detail},
    {
      path: '/my/btcrecord',
      name: 'Btcrecord',
      component: Btcrecord
    },
    {
      path: '/my/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/my/opinion',
      name: 'Opinion',
      component: Opinion
    },
    {
      path: '/my/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/my/user',
      name: 'User',
      component: User
    },
    {
      path: '/my/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/security/index',
      name: 'securityindex',
      component: SecurityIndex
    },
    {
      path: '/security/certify',
      name: 'certify',
      component: SecurityCertify
    },
    {
      path: '/security/email',
      name: 'securityemail',
      component: SecirityEmail
    },
    {
      path: '/security/login',
      name: 'loginpassword',
      component: SecurityLoginPass
    },
    {
      path: '/security/exchange',
      name: 'exchangepass',
      component: SecurityExchangePass
    },
    {
      path: '/security/mobile',
      name: 'securitymobile',
      component: SecurityMobile
    },
    {
      path: '/my/number',
      name: 'Number',
      component: Number
    }
  ]
})
