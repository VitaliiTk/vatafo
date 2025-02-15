import axios from 'axios'
import api from './axios'

// functions User Api
export async function getMe() {
  try {
    const response = await api.get('/users/me')
    return response.data
  } catch (error) {
    console.error(error.message)
  }
}

// логин
export async function loginUser({ email, password }) {
  const response = await axios.post('http://localhost:3001/auth/login', { email, password })

  const { token } = response.data
  localStorage.setItem('token', token)
  return response.data
}

// запрос на регистрацию пользователя
// запрос на сервер - регистрация
export async function userRegistration(username, email, password) {
  try {
    await axios.post('http://localhost:3001/auth/register', {
      username,
      email,
      password
    })
  } catch (error) {
    console.log(error.response?.data?.error || 'Что-то пошло не так')
  }
}
