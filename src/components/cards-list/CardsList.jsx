import axios from 'axios'
import { useQuery } from '@tanstack/react-query' // tanstack query
import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

// асинхронный запрос к серверу за данными
async function getCars() {
  return await axios.get('http://localhost:3001/cars')
}

export function CardsList({
  // data,
  testUsers,
  isLoged,
  addToFavorites,
  favoritesList,
  user,
  children = 'Default title'
}) {
  // tanstack query
  const { data, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars,
    select: data => data.data
  })

  // if (isLoading) return <p>Loading...</p>
  // if (error) return console.log(error)
  // if (error) return <p>{error.message}</p>

  // получаем массив обьектов которые юзер лайкнул
  const logedUserFavoriteList = user ? favoritesList.filter(item => item.userId === user.id) : []

  // ищем совпадения в этом массиве по cardId в массиве лайкнутых пользователем и id самой карточки товара
  function likeHandler(item) {
    return logedUserFavoriteList.some(favotite => favotite.cardId === item.id)
  }

  return (
    <section id="cards-list">
      <div className="container">
        <div className="cards-list__wrapper">
          <div className="title__info">
            <h2>{children}</h2>
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          {!isLoading && !error && (
            <div className="cards-list__box">
              {data.map(item => (
                <CardsListItem
                  key={item.id}
                  card={item}
                  testUsers={testUsers}
                  addToFavorites={addToFavorites}
                  isLoged={isLoged}
                  isLike={likeHandler(item)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
