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

  // можно не передавать параметр user_id, так как он уже есть в jwt токене
  async addNew(post_id) {
    const { data } = await api.post(`/favorites`, { post_id })
    return data
  },

  async remove(post_id) {
    const { data } = await api.delete(`/favorites/${post_id}`)
    return data
  }
}
