// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import napierCh from './assets/lang-ch.js'
import napierEn from './assets/lang-en.js'
import Axios from 'axios'
Vue.prototype.$axios = Axios

Vue.config.productionTip = true

// Vue.config.errorHandler = (err, vm, info) => {
//   console.log(err.stack)
//   console.log(vm)
//   console.log(info)
// }

// import {
//   Dialog
// } from 'element-ui'
// Vue.use('Dialog')

Vue.use(VueI18n)

const messages = {
  en: {
    message: 'hello',
    ...enLocale, // 或者用 Object.assign({ message: 'hello' }, enLocale)
    ...napierEn
  },
  zh: {
    message: '你好',
    ...zhLocale, // 或者用 Object.assign({ message: '你好' }, zhLocale)
    ...napierCh
  }
}

let localeLang = 'en'
if (localStorage.getItem('lang')) {
  localeLang = localStorage.getItem('lang')
}

// // Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localeLang, // set locale
  messages // set locale messages
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'HelloWorld') {
//     next()
//   } else {
//     next({name: 'HelloWorld'})
//   }
// })

// router.onError(() => {
//   router.push('/children2')
// })

Vue.mixin({
  data () {
    return {
      msg11: 'gogoo'
    }
  },
  mounted () {
    document.title = this.$options.title
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
