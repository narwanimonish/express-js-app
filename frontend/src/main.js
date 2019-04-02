import Vue from 'vue'
import App from './App.vue'

/* Importing bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Importing & declaring axios & VueAxios */
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
