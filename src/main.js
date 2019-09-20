import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'patternlock/dist/patternlock.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter)