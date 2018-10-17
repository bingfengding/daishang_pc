// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from "vue-awesome-swiper"
import VueFullPage from 'vue-fullpage.js'

import "swiper/dist/css/swiper.css"
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import "../src/style/reset.css"
import "vue-fullpage.js/dist/vue-fullpage"
import "animate.css"
import store from "./store"
import promise from 'es6-promise'
promise.polyfill()
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueFullPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
