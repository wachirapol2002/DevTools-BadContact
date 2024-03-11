import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://35.213.142.178:8086'
})

export { axiosInstance }
