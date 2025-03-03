// styles
import './user-post-list-item.css'
import useDeletepost from '../../hooks/useDeletepost'
import { useNavigate } from 'react-router-dom'
import { toNormalDate } from '../../utils/toNormalDate'
import { useState } from 'react'
import { DeleteModal } from '../delete-modal/DeleteModal'
import Spinner from '../spinner/Spinner'
import { useEffect } from 'react'

export default function UserPostListItem({ post }) {
  const { deleteMutation } = useDeletepost()
  const [isDelModal, setIsDelModal] = useState(false)
  const navigate = useNavigate()

  // console.log(post)
  const postId = post.id

  // отключает скролл страницы когда модалка открыта
  useEffect(() => {
    if (isDelModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isDelModal])

  function handleDelete() {
    // сначала надо сделать всплывающий алерт с подтверждением
    setIsDelModal(false)
    deleteMutation.mutate(postId)
  }

  function handleEdit() {
    navigate(`/acount/edit-post/${post.id}`)
  }

  if (!post) return <Spinner />

  return (
    <div className="user-post-list-item">
      <div className="image-box">
        <img className="image" src={post.Images[0]?.image_url} alt="" />
      </div>
      <div className="content-box">
        <div className="info">
          {/* <div>Заголовок</div> */}
          <div>{post.info}</div>
          <div>
            {post.price} {post.money_symbol}
          </div>
          <div>Создано: {toNormalDate(post.createdAt)}</div>
          <div>Обновлено: {toNormalDate(post.updatedAt)}</div>
        </div>
        <div className="btn-block">
          <button onClick={handleEdit}>Редактировать</button>
          <button onClick={() => setIsDelModal(true)}>Удалить</button>
        </div>
      </div>
      {isDelModal && (
        <DeleteModal yesClick={handleDelete} closeClick={() => setIsDelModal(false)} />
      )}
    </div>
  )
}
