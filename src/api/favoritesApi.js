import api from './axios'

export async function getFavorites() {
  const { data } = await api.get('/favorites')
  return data
}

export async function addFavorite({ post_id, user_id }) {
  const { data } = await api.post(`/favorites`, { post_id, user_id })
  console.log(data)
  return data
}
