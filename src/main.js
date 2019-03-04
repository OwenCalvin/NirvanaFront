import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/css/styles.css'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
