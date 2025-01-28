import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList() {
  return (
    <section id="cards-list">
      <div className="container">
        <div className="cards-list__wrapper">
          <h2>Новые объявления - Кыргызстан</h2>
          <div className="cards-list__box">
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
            <CardsListItem />
          </div>
        </div>
      </div>
    </section>
  )
}
