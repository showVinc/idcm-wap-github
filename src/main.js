// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import { Upload } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import i18n from '@/plugin/vue-i18n'
import store from '@/store/index'
import Axios from '@/plugin/axios'
import '@/assets/css/app.less'
import '@/assets/css/upload.less'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import fun from '@/plugin/main'
import Moment from 'moment'
import IdcmComponent from '@/components/index'

Vue.use(IdcmComponent)
Vue.use(MintUI)

Vue.use(ElementUI)

Vue.prototype.$http = Axios

Vue.prototype.$fun = fun

Vue.prototype.$moment = Moment

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})
