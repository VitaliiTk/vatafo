// styles
import './user-post-list-item.css'
import useDeletepost from '../../hooks/useDeletepost'
import { useNavigate } from 'react-router-dom'
import { toNormalDate } from '../../utils/toNormalDate'

export default function UserPostListItem({ post }) {
  const { deleteMutation } = useDeletepost()
  const navigate = useNavigate()

  // console.log(post)
  const postId = post.id
  const imageName = post.main_image

  function handleDelete() {
    // сначала надо сделать всплывающий алерт с подтверждением
    deleteMutation.mutate({ postId, imageName })
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
          <button onClick={handleDelete}>Удалить</button>
        </div>
      </div>
    </div>
  )
}
