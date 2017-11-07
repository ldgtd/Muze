// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('./assets/stylesheets/main.scss')

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#muse',
  router,
  store,
  template: '<App/>',
  components: { App }
})
