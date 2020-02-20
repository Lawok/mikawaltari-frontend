import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { tokenValidityCheck } from './guards';

Vue.use(VueRouter)

const vueRouter = new VueRouter({
  // see https://router.vuejs.org/guide/essentials/history-mode.html
  mode: 'history',
  routes,
});

vueRouter.beforeEach(tokenValidityCheck);

export default vueRouter;
