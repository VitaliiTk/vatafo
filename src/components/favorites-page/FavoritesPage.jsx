import { CardsList } from '../cards-list/CardsList'

export function FavoritesPage({
  user,
  favoritesList,
  testUsers,
  addToFavorites,
  isLoged,
  cardItems
}) {
  // фильтруем массив по второму массиву
  const filterDataFavoritesCards = () => {
    const userFavorites = favoritesList.filter(item => item.userId === user.id)

    // Для каждого элемента из orderArray находим соответствующий объект в dataArray
    const filtered = userFavorites.map(item => cardItems.find(card => card.id === item.cardId))
    // .filter(Boolean) // Убираем undefined, если вдруг id нет в dataArray

    console.log(filtered)
    return filtered
  }

  return (
    // <div>favotites</div>
    <CardsList
      data={filterDataFavoritesCards()}
      testUsers={testUsers}
      addToFavorites={addToFavorites}
      isLoged={isLoged}
      favoritesList={favoritesList}
      user={user}
    >
      Избранное
    </CardsList>
  )
}
