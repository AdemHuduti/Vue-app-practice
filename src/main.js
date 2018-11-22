import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import Data from './components/Data';
import Home from './Home';
import './global-style.css';

Vue.use(BootstrapVue);
Vue.use( VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/data', component: Data }
];

const router = new VueRouter({
  root: 'app',
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
