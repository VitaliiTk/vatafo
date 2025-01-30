import { CardsList } from '../cards-list/CardsList'
import { SearchPanel } from '../search-panel/SearchPanel'

export function SearchPage({ data, cardsSearching }) {
  // console.log(data)
  return (
    <section id="search-page">
      <div className="container">
        <div className="search-page__wrapper">
          <SearchPanel cardsSearching={cardsSearching} />
          <CardsList data={data}>
            {data.length === 0
              ? 'Ничего не найдено'
              : 'Результат поиска'}
          </CardsList>
        </div>
      </div>
    </section>
  )
}
