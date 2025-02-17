import api from '../services/api.config'

export const PostsService = {
  async getAllByUser() {
    const { data } = await api.get('/acount/userposts')
    return data
  },
  async getAll() {
    // console.log('get all posts')
    const { data } = await api.get('/posts')
    return data
  },
  async addNew(newData) {
    console.log(newData)
    const { data } = await api.post('/posts', newData)
    return data
  }
}
