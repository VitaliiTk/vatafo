import api from '../services/api.config'

export const UserService = {
  async getMe() {
    try {
      const response = await api.get('/users/me')
      return response.data
    } catch (error) {
      console.error(error.message)
      if (error.response.status === 401 || error.response.status === 400) {
        localStorage.removeItem('token')
        window.location.reload()
        return error
      }
    }
  },

  // отправка post запроса на сервер с фото
  async editMe(newData) {
    const { data } = await api.post('/users/avatar', newData)
    return data
  }
}
