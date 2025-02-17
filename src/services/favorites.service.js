import api from './api.config'

export const FavoritesService = {
  async getAll() {
    try {
      const { data } = await api.get('/favorites')
      return data
    } catch (error) {
      console.error('FavoritesService.getAll:', error)
      throw error
    }
  },

  async addNew({ post_id, user_id }) {
    const { data } = await api.post(`/favorites`, { post_id, user_id })
    console.log(data)
    return data
  }
}
