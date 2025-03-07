import api from './api.config'

export const ImageServise = {
  async delete(image_id) {
    const { data } = await api.delete(`/posts/delete-image/${image_id}`)
    return data
  },
  async doMain(image_id) {
    const { data } = await api.put(`/posts/image/${image_id}`)
    return data
  }
}
