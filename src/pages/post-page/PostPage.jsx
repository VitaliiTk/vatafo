import { BsFillTelephoneFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import usePost from '../../hooks/usePost'

import './post-page.css'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { useAddFavorite, useFavorites, useRemoveFavorite } from '../../hooks/useFavorites'
import useUser from '../../hooks/useUser'
import { modalAtom } from '../../store/modalsAtom'
import { useSetAtom } from 'jotai'

export default function PostPage() {
  const { user } = useUser()
  const { id } = useParams()
  const { data: post } = usePost(id)
  const { data: favorites } = useFavorites()
  const addFavorite = useAddFavorite()
  const removeFavorite = useRemoveFavorite()
  const setModal = useSetAtom(modalAtom)

  let isFavorite
  if (!user) isFavorite = false
  if (user) isFavorite = favorites?.some((item) => item.id == id)

  function toggleFavorites(e) {
    e.preventDefault() // Отменяем переход по ссылке
    e.stopPropagation() // Останавливаем всплытие
    if (!user) setModal(true)
    if (user) {
      if (isFavorite) {
        removeFavorite.mutate(id)
      } else {
        addFavorite.mutate(id)
      }
    }
  }

  return (
    <div className="post-page">
      <h3>Post page</h3>
      <div className="post-page__wrapper">
        <div className="post-content">
          <div className="slider">
            <span
              onClick={toggleFavorites}
              className={isFavorite ? 'favorite-icon like' : 'favorite-icon'}
            >
              {isFavorite ? <GoHeartFill /> : <GoHeart />}
            </span>
            <img src={post?.main_image} alt="" />
          </div>
          <h3 className="post-title">{post?.info}</h3>
          <div className="post-info">
            <div className="post-info__item">Состояние: Б/у</div>
            <div className="post-info__item">Рассрочка: Без рассрочки</div>
            <div className="post-info__item">Год: 2005</div>
            <div className="post-info__item">Топливо: Бензин</div>
            <div className="post-info__item">Бренд: Suzuki</div>
            <div className="post-info__item">Пробег: {post?.drive_length}</div>
          </div>
          <div className="post-more-info">
            <div className="post-info__item">Создано: 10 окт. 2024</div>
            <div className="post-info__item">Обновлено: 20 фев. 2025</div>
          </div>
        </div>
        <div className="post-owner__info">
          <div className="post-price">370 000 KGS</div>
          <div className="post-owner__box">
            <img src="/avatars/avatar-default.svg" alt="" />
            <div className="post-owner__descr">
              <div className="post-owner__name">Author Name</div>
              <span>Был(а) в сети 7 ч. назад</span>
            </div>
          </div>
          <button>Все объявления продавца</button>
          <div className="post-owner__mobile">
            <span className="icon">
              <BsFillTelephoneFill />
            </span>
            <span>+996150150150</span>
          </div>
        </div>
      </div>
    </div>
  )
}
