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
  async deletePost(postId) {
    console.log(postId)
    const { data } = await api.delete(`/posts/${postId}`)
    return data
  },
  async getById(id) {
    const { data } = await api.get(`/posts/${id}`)
    return data
  },
  async updatePost({ id, form }) {
    console.log(id, form)
    const { data } = await api.put(`/posts/${id}`, form)
    return data
  }
}
