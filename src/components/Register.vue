<template>
  <div class="form">
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="referral" v-model="referral">
    <input type="text" placeholder="username" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="password" placeholder="repeat password" v-model="password">
    <button @click="$emit('register', {name, password,referral, username})">
      Register
    </button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      password: '',
      referral: '',
      username: ''
    }  
  }
}
</script>