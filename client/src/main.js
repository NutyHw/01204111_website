import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
export const bus = new Vue();
Vue.prototype.$APIURL = 'http://2d29-124-122-187-46.ngrok.io/api/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
