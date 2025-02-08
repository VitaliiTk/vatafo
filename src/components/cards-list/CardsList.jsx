import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList() {
  const [cars, setCars] = useState([])

  // асинхронный запрос к серверу за данными
  async function getCars() {
    const { data } = await axios.get('http://localhost:3001/cars')
    setCars(data)
  }

  // use effect
  useEffect(() => {
    getCars()
  }, [])

  console.log(cars)

  // получаем массив обьектов которые юзер лайкнул
  // const logedUserFavoriteList = user ? favoritesList.filter(item => item.userId === user.id) : []

  // ищем совпадения в этом массиве по cardId в массиве лайкнутых пользователем и id самой карточки товара
  // function likeHandler(item) {
  //   return logedUserFavoriteList.some(favotite => favotite.cardId === item.id)
  // }

  return (
    <div className="cards-list__box">
      {cars.map(item => (
        <CardsListItem
          key={item.id}
          card={item}
          // testUsers={testUsers}
          // addToFavorites={addToFavorites}
          // isLoged={isLoged}
          // isLike={likeHandler(item)}
        />
      ))}
    </div>
  )
}
