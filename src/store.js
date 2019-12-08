import axios from 'axios'
const apiurl = 'https://dev.golike.net/api/'
export default {
  state: {
    username: '',
    coin: ''
  },
  mutations: {
    login(state, payload) {
      state.username = payload.username
      state.coin = payload.coin
    }
  },
  actions: {
    login(s, payload) {
      return axios.post(apiurl + 'login', payload)
    },
    register(s, payload) {
      return axios.post(apiurl + 'register', payload)
    }
  }
}