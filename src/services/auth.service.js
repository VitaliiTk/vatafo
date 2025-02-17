import axios from 'axios'

export const AuthService = {
  // логин
  async login({ email, password }) {
    const response = await axios.post('http://localhost:3001/auth/login', { email, password })

    const { token } = response.data
    localStorage.setItem('token', token)
    return response.data
  },

  // запрос на сервер - регистрация
  async registration({ username, email, password }) {
    console.log(username, email, password)
    try {
      const response = await axios.post('http://localhost:3001/auth/register', {
        username,
        email,
        password
      })
      this.loginUser({ email, password })
      return response.data.message
    } catch (error) {
      console.log(error.response?.data?.error || 'Что-то пошло не так')
      throw error
    }
  }
}
