<template>
  <div class="form">
    <input type="text" placeholder="username" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="password" placeholder="repeat password" v-model="password">
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="referral" v-model="referral">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      password: '',
      referral: '',
      username: ''
    }  
  },
  methods: {
    register() {
      axios.post('https://dev.golike.net/api/register', {
        name: this.name,
        password: this.password,
        referral: this.referral,
        username: this.username
      }).then(res => {
        window.console.log(res)
      }).catch(err => {
        window.console.log(err)
      })
    }
  }
}
</script>