import axios from 'axios'

export const AuthService = {
  // логин
  async login({ email, password }) {
    const { data } = await axios.post('http://localhost:3001/auth/login', { email, password })
    const { token } = data
    localStorage.setItem('token', token)
    return data
  },

  // запрос на сервер - регистрация
  async registration({ username, email, password }) {
    const { data } = await axios.post('http://localhost:3001/auth/register', {
      username,
      email,
      password
    })
    return data
  }
}
