import { useState } from 'react'

import { CardsListItem } from '../cards-list-item/CardsListItem'

import './cards-list.css'

export function CardsList({ data }) {
  return (
    <section id="cards-list">
      <div className="container">
        <div className="cards-list__wrapper">
          <h2>Новые объявления - Кыргызстан</h2>
          <div className="cards-list__box">
            {data.map(item => (
              <CardsListItem key={item.id} card={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
