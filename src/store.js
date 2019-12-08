import axios from 'axios'
const apiurl = 'https://dev.golike.net/api/'
export default {
  state: {
    username: '',
    coin: '',
    jobs: null
  },
  mutations: {
    login(state, payload) {
      state.username = payload.username
      state.coin = payload.coin
    },
    jobs(state, jobs) {
      state.jobs = jobs
    }
  },
  actions: {
    login(s, payload) {
      return axios.post(apiurl + 'login', payload)
    },
    register(s, payload) {
      return axios.post(apiurl + 'register', payload)
    },
    getJobs() {
      return axios.get(apiurl + 'job', { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
    }
  }
}