// import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import usePost from '../../hooks/usePost'

import { GoHeart, GoHeartFill } from 'react-icons/go'
import { useAddFavorite, useFavorites, useRemoveFavorite } from '../../hooks/useFavorites'
import useUser from '../../hooks/useUser'
import { modalAtom } from '../../store/modalsAtom'
import { useSetAtom } from 'jotai'
import Spinner from '../../components/spinner/Spinner'

import { toNormalDate } from '../../utils/toNormalDate'
import { SliderMine } from '../../components/slider/SliderMine'

import './post-page.css'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function PostPage() {
  const { user } = useUser()
  const { id } = useParams()
  const { data: post, isPending } = usePost(id)
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

  if (isPending) return <Spinner />

  const isAuthorOfPost = user?.id === post.user_id
  // const isAuthorOfPost = true

  return (
    <div className="post-page">
      <h3>Post page</h3>
      <div className="post-page__wrapper">
        <div className="post-content">
          <div className="slider">
            {!isAuthorOfPost && (
              <span
                onClick={toggleFavorites}
                className={isFavorite ? 'favorite-icon like' : 'favorite-icon'}
              >
                {isFavorite ? <GoHeartFill /> : <GoHeart />}
              </span>
            )}

            {/* <Slider images={images} /> */}
            <SliderMine images={post.Images} isAuthorOfPost={isAuthorOfPost} post={post} />
          </div>
          <div className="post-info">
            <h3 className="post-title">{post?.info}</h3>
            {/* <div className="post-info__item">Состояние: Б/у</div> */}
            {/* <div className="post-info__item">Рассрочка: Без рассрочки</div> */}
            <div className="post-info__item">Категория: {post?.category}</div>
            <div className="post-info__item">Город: {post?.city}</div>
            <div className="post-info__item">Год: {post?.year}</div>
            <div className="post-info__item">Привод: {post?.drive}</div>
            <div className="post-info__item">Руль: {post?.stearingWheel}</div>
            <div className="post-info__item">Коробка: {post?.gear}</div>
            <div className="post-info__item">Топливо: {post?.fuels.map((item) => item + ', ')}</div>
            <div className="post-info__item">
              Вид оплаты: {post?.payMethod.map((item) => item + ', ')}
            </div>
            {/* <div className="post-info__item">Бренд: Suzuki</div> */}
            <div className="post-info__item">Пробег: {post?.drive_length}</div>
            <div className="post-more-info">
              <div className="post-info__item">
                Создано: {toNormalDate(post?.createdAt)}
                {}
              </div>
              <div className="post-info__item">Обновлено: {toNormalDate(post?.updatedAt)}</div>
            </div>
          </div>
        </div>
        <div className="post-owner__info">
          <div className="post-price">
            {post?.price} {post?.money_symbol}
          </div>
          <div className="post-owner__box">
            <div className="post__avatar-box">
              <img className="post__avatar" src={post?.User.avatar} alt="" />
            </div>
            <div className="post-owner__descr">
              <div className="post-owner__name">{post?.User.username}</div>
              {/* <span>Был(а) в сети 7 ч. назад</span> */}
              <Link to={`/user/${post?.user_id}`}>
                <button>{isAuthorOfPost ? 'Мой профиль' : 'Все объявления продавца'}</button>
              </Link>
            </div>
          </div>
          {/* <div className="post-owner__mobile">
            <span className="icon">
              <BsFillTelephoneFill />
            </span>
            <span>+996150150150</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
