import axios from 'axios'
import api from './axios'

export async function postNewCar(newData) {
  console.log(newData)
  const response = await api.post('/posts', newData)
}

export async function getAllPosts() {
  // console.log('get all posts')
  const { data } = await api.get('/posts')
  return data
}
