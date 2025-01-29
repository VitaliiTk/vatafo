import { CiMail } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'

import './card-list-item.css'

export function CardsListItem({ card }) {
  const title = card.title.slice(0, 40)

  return (
    <a href="#" className="card">
      <img className="card__img" src={card.images[0]} alt="" />
      <div className="card__content">
        <div className="card__info">
          {/* <div className="card__price-old">1600</div> */}
          <div className="card__price">{card.price} KGS</div>
          <div className="card__subcategory-name">
            {card.category}
          </div>
          <div className="card__descr">{title} ... </div>
        </div>
        <div className="card__bottom-info">
          <div className="card__bottom-info-left-side">
            <img
              className="card__avatar-img"
              src="/avatars/avatar.jpeg"
              alt=""
            />
            <div className="card__ac-status">PRO</div>
          </div>
          <div className="card__bottom-info-right-side">
            <span className="card__icon">
              <CiMail />
            </span>
            <span className="card__icon">
              <CiHeart />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
