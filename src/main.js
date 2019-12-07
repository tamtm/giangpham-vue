import Vue from 'vue'
import VueRouter from 'vue-router'
import VueToastr from 'vue-toastr'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueToastr)

import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

new Vue({
  router: new VueRouter({mode: 'history', routes: routes}),
  render: h => h(App)
}).$mount('#app')
