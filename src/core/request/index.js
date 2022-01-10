import axios from 'axios'

import { BASE_API_URL } from '@/constants/url'

export const getParamsUrl = settings => {
  let params = ''

  for (let key in settings) {
    if (Boolean(settings[key]) || settings[key] === 0) {
      params += params ? '&' : '?'
      params += `${key}=${settings[key]}`
    }
  }

  return params
}

const Request = axios.create({ baseURL: BASE_API_URL, timeout: 30000 })

Request.interceptors.request.use(
  () => {},
  err => Promise.reject(err),
)

Request.interceptors.response.use(
  res => res,
  error => Promise.reject(error.response),
)

export { Request }
