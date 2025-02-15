import api from './axios'

export async function getFavorites(id) {
  const { data } = await api.get(`/favorites/${id}`)
  return data
}

export async function addFavorite({ post_id, user_id }) {
  console.log('From addFavorites: >', post_id, user_id)
  await api.post(`/favorites`, { post_id, user_id })
}
