import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// import permission from './primission';
Vue.use(ElementUI)


// Vue.component('TreeSelect',TreeSelect)
Vue.config.productionTip = false
console.log(process.env.VUE_APP_SERVICE_URL)
const vm = new Vue({
  router,
  render: h => h(App),
  

}).$mount('#app')
console.log(vm)
