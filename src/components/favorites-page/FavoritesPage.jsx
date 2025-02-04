import { CardsList } from '../cards-list/CardsList'

export function FavoritesPage({ user, favoritesList, testUsers, addToFavorites, isLoged }) {
  // console.log(user)
  // console.log(favoritesList)
  return (
    <section id="favorites">
      <div className="container">
        <div className="favorites__wrapper">
          <h2>FavoritePage</h2>
          {/* <p>{user}</p> */}
          {/* <p>{favoritesList}</p> */}
          <CardsList
          // data={favoritesList}
          // testUsers={testUsers}
          // addToFavorites={addToFavorites}
          // isLoged={isLoged}
          // favoritesList={favoritesList}
          // user={user}
          />
        </div>
      </div>
    </section>
  )
}
