import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Table, TableColumn, Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/argon.css'
import VueMathjax from 'vue-mathjax'
import Chart from 'vue2-frappe'

Vue.use(Chart)

Vue.use(VueMathjax);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Input.name, Input);
// Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
