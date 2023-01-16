import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

// const apiKey = process.env.REACT_APP_API_KEY

// instance.interceptors.request.use(config => {
//   config.url = `${config.url}&units=metric&appid=${apiKey}`
//   return config
// })

// &units=metric - для градусов
