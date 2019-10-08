import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

const vueRouter = new VueRouter({
  // see https://router.vuejs.org/guide/essentials/history-mode.html
  mode: 'history',
  routes,
});

export default vueRouter;
