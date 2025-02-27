// styles
import './user-post-list-item.css'
import useDeletepost from '../../hooks/useDeletepost'
import { useNavigate } from 'react-router-dom'
import { toNormalDate } from '../../utils/toNormalDate'
import { useState } from 'react'
import { DeleteModal } from '../delete-modal/DeleteModal'

export default function UserPostListItem({ post }) {
  const { deleteMutation } = useDeletepost()
  const [isDelModal, setIsDelModal] = useState(false)
  const navigate = useNavigate()

  // console.log(post)
  const postId = post.id

  function handleDelete() {
    // сначала надо сделать всплывающий алерт с подтверждением
    setIsDelModal(false)
    deleteMutation.mutate(postId)
  }

  function handleEdit() {
    navigate(`/acount/edit-post/${post.id}`)
  }

  return (
    <div className="user-post-list-item">
      <div className="image-box">
        <img className="image" src={post.main_image} alt="" />
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
