import { CarBrandsList } from '../../components/popular-list-horizontal/CarBrandsList'
import { CardsList } from '../../components/cards-list/CardsList'

export function HomePage({ user }) {
  return (
    <>
      {/* HomePage */}
      <CarBrandsList />
      <CardsList
        user={user}
        // data={filteredData}
        // testUsers={testUsers}
        // addToFavorites={addToFavorites}
        // isLoged={isLoged}
        // favoritesList={favoritesList}
        // user={user}
      />
      {/* {filteredData.length === 0
          ? `По запросу ${searchValue || selectBrand} ничего не найдено в категории ${selectBrand}`
          : `По запросу ${
              searchValue || selectBrand ? searchValue || selectBrand : 'Все'
            } найдено ${filteredData.length} объявлений в категории ${selectBrand}`} */}
      {/* </CardsList> */}
    </>
  )
}
