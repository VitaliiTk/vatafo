import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList({ user }) {
  const [cars, setCars] = useState([])
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  // асинхронный запрос к серверу за данными
  async function getCars() {
    try {
      const { data } = await axios.get('http://localhost:3001/cars')
      setCars(data)
    } catch (error) {
      setError(error.message)
    }
  }
  async function getUsers() {
    const { data } = await axios.get('http://localhost:3001/users')
    setUsers(data)
  }
  async function getFavorites() {
    const { data } = await axios.get(`http://localhost:3001/favorites/${user.id}`)
    console.log(data)
    setFavorites(data)
  }

  console.log(user)

  // use effect
  useEffect(() => {
    getCars()
    getUsers()
  }, [])

  function likeTest(cardId) {
    const isInFavorite = favorites.some(favotite => favotite.cardId == cardId)
    return isInFavorite
  }

  if (error) return <p>{error}</p>

  return (
    <div className="cards-list__box">
      {cars.map(item => (
        <CardsListItem key={item.id} card={item} users={users} isLike={likeTest(item.id)} />
      ))}
    </div>
  )
}
