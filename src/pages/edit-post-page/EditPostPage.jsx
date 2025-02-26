import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { RegModal } from '../../components/reg-modal/RegModal'
import usePost from '../../hooks/usePost'

// styles
import './edit-post-page.css'

export function EditPostPage() {
  const { user } = useUser()
  const { id } = useParams()
  const { data } = usePost(id)

  if (!user) return <RegModal />

  return (
    <div className="edit-page page-margin-tb">
      <h3>Редактировать пост с id: {id}</h3>
      <div className="edit-page__flex-wrapper">
        <img className="edit-page__image" src={data?.main_image} alt="" />
      </div>
    </div>
  )
}
