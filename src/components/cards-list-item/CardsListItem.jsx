import { CiMail } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'

import './card-list-item.css'

export function CardsListItem({ card, testUsers, addToFavorites }) {
  const title = card.info.slice(0, 40)

  const userInfo = testUsers.find(user => user.id === card.userId)

  const cardCreatorInfo = {
    avatarImage: userInfo.avatarURL,
    status: userInfo.status
    // userName: userInfo.userName
  }

  function onFavoriteAddClcik(e) {
    addToFavorites(card)
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
            <img className="card__avatar-img" src={cardCreatorInfo.avatarImage} alt="" />
            {/* <span className="card__info-username">{cardCreatorInfo.userName}</span> */}
            {cardCreatorInfo.status === 'pro' && <div className="card__ac-status">PRO</div>}
          </div>
          <div className="card__bottom-info-right-side">
            <span className="card__icon">
              <CiMail />
            </span>
            <span className="card__icon like" onClick={onFavoriteAddClcik}>
              <CiHeart />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
