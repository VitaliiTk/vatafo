import api from './api.config'

export const AuthorService = {
  async getAuthorAllInfo(author_id) {
    const { data } = await api.get('/users/' + author_id)
    return data
  }
}
