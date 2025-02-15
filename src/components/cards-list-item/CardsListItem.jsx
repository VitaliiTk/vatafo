// lib

// store

// icons
import { GoHeart } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'

// styles
import './card-list-item.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFavorite } from '../../api/favoritesApi'

export function CardsListItem({ card }) {
  const title = card.info.slice(0, 30)

  console.log(card)

  const queryClient = useQueryClient()

  const user = queryClient.getQueryData(['user'])

  // console.log(user.id)

  const { mutate } = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => console.log('add favorite success')
  })

  return (
    <a /* href="#" */ className="card">
      <img className="card__img" src={card.main_image} alt="" />
      <div className="card__content">
        <div className="card__info">
          {/* <div className="card__price-old">1600</div> */}
          <div className="card__price">{card.price} KGS</div>
          <div className="card__subcategory-name">{card.category}</div>
          <div className="card__descr">{title} ... </div>
        </div>
        <div className="card__bottom-info">
          <div className="card__bottom-info-left-side">
            <img className="card__avatar-img" src="/avatars/avatar-default.svg" alt="" />
            <div className="card__ac-status">Pro</div>
          </div>
          <div className="card__bottom-info-right-side">
            <span className="card__icon">
              <CiMail />
            </span>
            <span
              onClick={() => mutate({ post_id: card.id, user_id: user.id })}
              className="card__icon favorite"
            >
              <GoHeart />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
