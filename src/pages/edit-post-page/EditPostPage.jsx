import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { RegModal } from '../../components/reg-modal/RegModal'
import usePost from '../../hooks/usePost'

// styles
import './edit-post-page.css'
import useUpdatePost from '../../hooks/useUpdatePost'

export function EditPostPage() {
  const { user } = useUser()
  const { id } = useParams()
  const { data } = usePost(id)
  const updatePostMutation = useUpdatePost(id)

  if (!user) return <RegModal />

  function formAcion(formData) {
    const info = formData.get('info')
    const price = formData.get('price')
    const image = formData.get('image')
    const newData = { info, price, main_image: image }
    updatePostMutation.mutate(newData)
  }

  return (
    <div className="edit-page page-margin-tb">
      <h3>Редактировать пост с id: {id}</h3>
      <div className="edit-page__flex-wrapper">
        <img className="edit-page__image" src={data?.main_image} alt="" />
        <form action={formAcion} className="edit-page__form">
          <div className="form">
            {/* <div className="form-group">
              <label htmlFor="title">Заголовок</label>
              <input type="text" id="title" defaultValue={data?.title} />
            </div> */}
            <div className="form-group">
              <label htmlFor="description">Описание</label>
              <textarea id="description" name="info" defaultValue={data?.info} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Цена</label>
              <input type="number" id="price" name="price" defaultValue={data?.price} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Картинка</label>
              <input type="text" id="image" name="image" defaultValue={data?.main_image} />
            </div>
            <button>Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  )
}
