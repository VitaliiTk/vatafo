// lib
import { useMutation, useQueryClient } from '@tanstack/react-query'

// store

// icons
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'

// components
import { addFavorite, getFavorites } from '../../api/favoritesApi'

// styles
import './card-list-item.css'
import { useAtom } from 'jotai'
import { modalAtom } from '../../atoms/modalsAtom'
import { useState } from 'react'

export function CardsListItem({ card }) {
  const [modal, setModal] = useAtom(modalAtom)
  const [isLike, setIsLike] = useState(false)

  const title = card.info.slice(0, 30)

  console.log(card)

  const queryClient = useQueryClient()

  const user = queryClient.getQueryData(['user'])

  const { mutate } = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries(['favorites'])
      console.log('add favorite success')
    }
  })

  // const updateFavorites = useMutation({
  //   mutationFn: getFavorites,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['favorites'])
  //   }
  // })

  const onLikeIconClickHandler = () => {
    console.log('click')
    if (!user) return setModal(true)
    if (user) {
      // updateFavorites.mutate()
      return mutate({ post_id: card.id, user_id: user.id })
    }
  }

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
            <img
              className="card__avatar-img"
              src={card?.User?.avatar || 'avatars/avatar-default.svg'}
              alt=""
            />
            <div className="card__ac-status">{card?.User?.status === 'pro' ? 'Pro' : ''}</div>
          </div>
          <div className="card__bottom-info-right-side">
            {/* <span className="card__icon">
              <CiMail />
            </span> */}
            <span onClick={onLikeIconClickHandler} className="card__icon favorite">
              {isLike ? <GoHeartFill /> : <GoHeart />}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
