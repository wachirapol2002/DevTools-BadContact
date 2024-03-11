import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8086'
})

export { axiosInstance }
