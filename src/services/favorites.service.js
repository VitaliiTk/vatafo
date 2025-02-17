import api from './api.config'

export const FavoritesService = {
  async getAll() {
    const { data } = await api.get('/favorites')
    return data
  },

  async addNew({ post_id, user_id }) {
    const { data } = await api.post(`/favorites`, { post_id, user_id })
    console.log(data)
    return data
  }
}
