import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList({
  data,
  testUsers,
  isLoged,
  addToFavorites,
  favoritesList,
  user,
  children = 'Children title'
}) {
  // получаем массив обьектов которые юзер лайкнул
  const logedUserFavoriteList = user ? favoritesList.filter(item => item.userId === user.id) : []
  if (user) console.log(`${user?.userName} favorites list `, logedUserFavoriteList)
  if (!user) console.log('User: ', user)

  function likeHandler(item) {
    return logedUserFavoriteList.some(favotite => favotite.cardId === item.id)
  }

  return (
    <section id="cards-list">
      <div className="container">
        <div className="cards-list__wrapper">
          {/* <h2>Новые объявления - Кыргызстан</h2> */}
          <div className="title__info">
            <h2>{children}</h2>
          </div>
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
        </div>
      </div>
    </section>
  )
}
