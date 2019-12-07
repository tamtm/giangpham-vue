<template>
  <div class="form">
    <input type="text" placeholder="username" v-model="username">
    <input type="text" placeholder="password" v-model="password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      message: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('https://dev.golike.net/api/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        window.console.log(res)
      }).catch(err => {
        window.console.log(err)
      })
    }
  }
}
</script>