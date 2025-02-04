import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList({ data, testUsers, children = 'Children title' }) {
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
              <CardsListItem key={item.id} card={item} testUsers={testUsers} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
