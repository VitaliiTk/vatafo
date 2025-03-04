import { useNavigate, useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
// import { RegModal } from '../../components/reg-modal/RegModal'
import usePost from '../../hooks/usePost'
import { toNormalDate } from '../../utils/toNormalDate'

// styles
import './edit-post-page.css'
import useUpdatePost from '../../hooks/useUpdatePost'
import { DeleteModal } from '../../components/delete-modal/DeleteModal'
import { useState } from 'react'
import useDeletepost from '../../hooks/useDeletepost'
import { useEffect } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import useDeleteImage from '../../hooks/useDeleteImage'

export function EditPostPage() {
  const { user } = useUser()
  const { id } = useParams()
  const { data } = usePost(id)
  const { deleteMutation } = useDeletepost()
  const updatePost = useUpdatePost(id)
  const deleteImage = useDeleteImage(id) // hook for delet one image by image id
  const navigate = useNavigate()

  const [isDelModal, setIsDelModal] = useState(false)

  // отключает скролл страницы когда модалка открыта
  useEffect(() => {
    if (isDelModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isDelModal])

  function formAction(formData) {
    const form = new FormData()

    form.append('price', formData.get('price'))
    form.append('info', formData.get('info'))
    form.append('drive_length', formData.get('drive_length'))
    form.append('tel', formData.get('tel'))

    formData.getAll('images').forEach((image) => form.append('images[]', image)) // добавить массив картинок

    updatePost.mutate({ id, form })
  }

  function handleDeletePost() {
    deleteMutation.mutate(id)
    setIsDelModal(false)
    navigate('/')
  }

  function handleDeleteImage(image_id) {
    console.log(`>>>>>>>>>>>>> image id: ${image_id}`)
    deleteImage.mutate(image_id)
  }

  // const images = data?.Images.map((image) => {
  //   return {
  //     original: image.image_url,
  //     thumbnail: image.image_url,
  //     thumbnailHeight: '70px',
  //     thumbnailWidth: '100px',
  //     originalHeight: '500px'
  //   }
  // })

  // if (!user) return <RegModal />
  if (!user) return navigate('/')

  return (
    <div className="edit-page page-margin-tb">
      <h3>Редактировать пост с id: {id}</h3>
      <div className="content-wrapper">
        {data?.Images.map((image, index) => (
          <div key={index} className="image-box">
            {data.Images.length === 1 ? null : (
              <span className="delete-image-icon" onClick={() => handleDeleteImage(image.id)}>
                <TiDeleteOutline />
              </span>
            )}

            <img className="image" src={image.image_url} alt="" />
          </div>
        ))}
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
              <input type="file" name="images" id="image" multiple />
            </div>

            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => navigate(-1)}>
              Назад
            </button>
            <button type="button" onClick={() => setIsDelModal(true)}>
              Удалить
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
      {isDelModal && (
        <DeleteModal yesClick={handleDeletePost} closeClick={() => setIsDelModal(false)} />
      )}
    </div>
  )
}
