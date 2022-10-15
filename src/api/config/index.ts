import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

instance.interceptors.request.use(config => {
  config.url = `${config.url}&units=metric&appid=${apiKey}`
  return config
})

// &units=metric - для градусов
