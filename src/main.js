import '@babel/polyfill'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './styles/style.scss'

library.add()
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
