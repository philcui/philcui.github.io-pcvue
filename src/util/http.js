import axios from 'axios'

var instance = axios.create({
  timeout: 5000,
  baseURL: 'http://10.0.2.166:8288/doc',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
export default instance
