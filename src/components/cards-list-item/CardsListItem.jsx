// lib
import { useAtom } from 'jotai'

// store
import { modalAtom } from '../../store/modalsAtom'

// icons
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'

// components

// hooks
import useUser from '../../hooks/useUser'
import { useAddFavorite, useFavorites, useRemoveFavorite } from '../../hooks/useFavorites'

// styles
import './card-list-item.css'

export function CardsListItem({ card }) {
  const { user } = useUser()
  const { data: favorites } = useFavorites()
  const addFavorite = useAddFavorite()
  const removeFavorite = useRemoveFavorite()
  const [modal, setModal] = useAtom(modalAtom)
  const title = card.info.slice(0, 30)

  let isFavorite
  if (!user) isFavorite = false
  if (user) isFavorite = favorites?.some((item) => item.id === card.id)

  function toggleFavorites(e) {
    e.preventDefault() // Отменяем переход по ссылке
    e.stopPropagation() // Останавливаем всплытие
    if (!user) setModal(true)
    if (user) {
      if (isFavorite) {
        removeFavorite.mutate(card.id)
      } else {
        addFavorite.mutate(card.id)
      }
    }
  }

  return (
    <a href={`/posts/${card.id}`} target="_blank" className="card">
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
            <span onClick={toggleFavorites} className="card__icon favorite">
              {isFavorite ? (
                <span className="like">
                  <GoHeartFill />
                </span>
              ) : (
                <GoHeart />
              )}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
