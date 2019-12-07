import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Member from './components/Member.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  }
]