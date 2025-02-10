import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

// Добавляем токен во все запросы автоматически
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token') // Берем токен из localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // Добавляем токен в заголовки
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default api
