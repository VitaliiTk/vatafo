import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList({ user }) {
  const [cars, setCars] = useState([])
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])

  // асинхронный запрос к серверу за данными
  async function getCars() {
    const { data } = await axios.get('http://localhost:3001/cars')
    setCars(data)
  }
  async function getUsers() {
    const { data } = await axios.get('http://localhost:3001/users')
    setUsers(data)
  }
  async function getFavorites() {
    const { data } = await axios.get(`http://localhost:3001/favorites/${userId}`)
    setFavorites(data)
  }

  // use effect
  useEffect(() => {
    getCars()
    getUsers()
    if (user?.userId) getFavorites()
  }, [])

  // получаем массив обьектов которые юзер лайкнул
  // const logedUserFavoriteList = user ? favoritesList.filter(item => item.userId === user.id) : []

  // ищем совпадения в этом массиве по cardId в массиве лайкнутых пользователем и id самой карточки товара
  // function likeHandler(item) {
  //   return logedUserFavoriteList.some(favotite => favotite.cardId === item.id)
  // }

  function likeTest(cardId) {
    // console.log(favorites)
    // console.log(cardId)
    const isInFavorite = favorites.some(favotite => favotite.cardId == cardId)
    return isInFavorite
  }

  return (
    <div className="cards-list__box">
      {cars.map(item => (
        <CardsListItem
          key={item.id}
          card={item}
          users={users}
          // addToFavorites={addToFavorites}
          // isLoged={isLoged}
          isLike={likeTest(item.id)}
        />
      ))}
    </div>
  )
}
