import axios from 'axios'
import api from './axios'

// functions User Api
export async function getMe() {
  try {
    const response = await api.get('/users/me')
    return response.data
  } catch (error) {
    console.error(error.message)
    // если ошибка 401, то удаляем токен из localStorage и перенаправляем на страницу логина
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.reload() // перезагружаем страницу для сброса состояния приложения и перехода на страницу логина
    }
  }
}

// логин
export async function loginUser({ email, password }) {
  const response = await axios.post('http://localhost:3001/auth/login', { email, password })

  const { token } = response.data
  localStorage.setItem('token', token)
  return response.data
}

// запрос на сервер - регистрация
export async function userRegistration({ username, email, password }) {
  console.log(username, email, password)
  try {
    const response = await axios.post('http://localhost:3001/auth/register', {
      username,
      email,
      password
    })
    await loginUser({ email, password })
    return response.data.message
  } catch (error) {
    console.log(error.response?.data?.error || 'Что-то пошло не так')
    throw error
  }
}
