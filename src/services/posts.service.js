import api from '../services/api.config'

export const PostsService = {
  async getAllByUser() {
    const { data } = await api.get('/acount/userposts')
    return data
  },
  async getAll() {
    const { data } = await api.get('/posts')
    return data
  },
  async addNew(newData) {
    console.log(newData)
    const { data } = await api.post('/posts', newData)
    return data
  },
  async deletePost(id) {
    const { data } = await api.delete(`/posts/${id}`)
    return data
  },
  async getById(id) {
    const { data } = await api.get(`/posts/${id}`)
    return data
  },
  async updatePost(id, newData) {
    const { data } = await api.put(`/posts/${id}`, newData)
    return data
  }
}
