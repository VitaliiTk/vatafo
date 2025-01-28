import { CiMail } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'

import './card-list-item.css'

export function CardsListItem() {
  return (
    <a href="#" className="card">
      <img
        className="card__img"
        src="/public/cards-img/card-img.webp"
        alt=""
      />
      <div className="card__info">
        <div className="card__price-old">1600</div>
        <div className="card__price">1500 KGS</div>
        <div className="card__subcategory-name">
          Посуточная аренда квартир
        </div>
        <div className="card__descr">
          Посуточно, Суточные, квартиры, посуточно
        </div>
        <div className="card__bottom-info">
          <div className="card__bottom-info-left-side">
            <img
              className="card__avatar-img"
              src="/public/avatars/avatar.jpeg"
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
