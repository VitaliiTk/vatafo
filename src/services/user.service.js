import api from '../services/api.config'

export const UserService = {
  async getMe() {
    try {
      const response = await api.get('/users/me')
      return response.data
    } catch (error) {
      console.error(error.message)
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        window.location.reload()
      }
    }
  },

  // отправка post запроса на сервер с фото
  async editMe(newAvatar) {
    try {
      const { data } = await api.post('/users/avatar', { avatar: newAvatar })
      return data
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }
}
