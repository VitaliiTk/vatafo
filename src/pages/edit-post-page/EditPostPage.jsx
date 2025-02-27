import { useNavigate, useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { RegModal } from '../../components/reg-modal/RegModal'
import usePost from '../../hooks/usePost'
import { toNormalDate } from '../../utils/toNormalDate'

// styles
import './edit-post-page.css'
import useUpdatePost from '../../hooks/useUpdatePost'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostsService } from '../../services/posts.service'

export function EditPostPage() {
  const { user } = useUser()
  const { id } = useParams()
  const { data } = usePost(id)

  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const updatePost = useMutation({
    mutationFn: PostsService.updatePost,
    onSuccess: () => queryClient.invalidateQueries(['post', id])
  })

  function formAction(formData) {
    const form = new FormData()

    form.append('price', formData.get('price'))
    form.append('info', formData.get('info'))
    form.append('drive_length', formData.get('drive_length'))
    form.append('tel', formData.get('tel'))
    form.append('image', formData.get('image'))

    updatePost.mutate({ id, form })
  }

  if (!user) return <RegModal />

  return (
    <div className="edit-page page-margin-tb">
      <h3>Редактировать пост с id: {id}</h3>
      <div className="content-wrapper">
        <div className="image-box">
          <img className="image" src={data?.main_image} alt="" />
        </div>
        <div className="info">
          {/* FORM ===========================================================*/}
          <form action={formAction}>
            <div className="input-block">
              <label htmlFor="price">Price: </label>
              <input type="number" name="price" id="price" defaultValue={data?.price} />
            </div>
            <div className="input-block">
              <label htmlFor="info">Info: </label>
              <textarea name="info" id="info" defaultValue={data?.info}></textarea>
            </div>
            <div className="input-block">
              <label htmlFor="drive_length">drive_length: </label>
              <input
                type="number"
                name="drive_length"
                id="drive_length"
                defaultValue={data?.drive_length}
              />
            </div>

            <div className="input-block">
              <label htmlFor="tel">tel: </label>
              <input type="tel" name="tel" id="tel" defaultValue={data?.tel} />
            </div>

            <div className="input-block">
              <input type="file" name="image" id="image" />
            </div>

            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => navigate(-1)}>
              Отмена
            </button>
          </form>

          <div className="data-info-wrapper">
            <div className="data-info">
              <span>Создано:</span>
              <span className="date">{toNormalDate(data?.createdAt)}</span>
            </div>
            <div className="data-info">
              <span>Обнавлено:</span>
              <span className="date">{toNormalDate(data?.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
