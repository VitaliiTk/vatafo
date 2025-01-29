import { useState } from 'react'

import { CardsListItem } from '../cards-list-item/CardsListItem'

import { cards } from '../../data'

import './cards-list.css'

export function CardsList() {
  const [cardItems, setCardItems] = useState(cards)

  return (
    <section id="cards-list">
      <div className="container">
        <div className="cards-list__wrapper">
          <h2>Новые объявления - Кыргызстан</h2>
          <div className="cards-list__box">
            {cardItems.map(card => (
              <CardsListItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
