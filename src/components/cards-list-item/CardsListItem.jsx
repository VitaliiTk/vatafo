import { CiMail } from 'react-icons/ci'
import { GoHeart } from 'react-icons/go'
import { GoHeartFill } from 'react-icons/go'

import './card-list-item.css'

export function CardsListItem({ card }) {
  const title = card.info.slice(0, 30)

  // const userInfo = testUsers.find(user => user.id === card.userId)

  function favoriteIconClickkHandler() {
    console.log('like')
  }

  return (
    <a /* href="#" */ className="card">
      <img className="card__img" src={card.mainImage.url} alt={card.images[0].name} />
      <div className="card__content">
        <div className="card__info">
          {/* <div className="card__price-old">1600</div> */}
          <div className="card__price">{card.price} KGS</div>
          <div className="card__subcategory-name">{card.category}</div>
          <div className="card__descr">{title} ... </div>
        </div>
        <div className="card__bottom-info">
          <div className="card__bottom-info-left-side">
            <img className="card__avatar-img" src="/avatars/avatar.jpeg" alt="" />
            {/* <span className="card__info-username">{cardCreatorInfo.userName}</span> */}
            <div className="card__ac-status">PRO</div>
          </div>
          <div className="card__bottom-info-right-side">
            <span className="card__icon">
              <CiMail />
            </span>
            <span className="card__icon favorite" onClick={favoriteIconClickkHandler}>
              <GoHeart />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
