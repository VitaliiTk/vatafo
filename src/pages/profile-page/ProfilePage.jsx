// libs
import { useQuery } from '@tanstack/react-query'
import api from '../../api.axios'
// components
import { Button } from '../../components/button/Button'
// jotai - store
import { useState } from 'react'
// styles
import './profile.css'

// ==========================================================
export function ProfilePage() {
  const [editView, setEditView] = useState(false)
  const [formWar, setFormWar] = useState('')

  const { data: user } = useQuery({
    queryKey: ['user'],
    enabled: false
  })

  // редактирование фото
  async function formSubmit(formData) {
    const newAvatarUrl = formData.get('avatarUrl')
    if (!newAvatarUrl) return console.error('Вставьте URL новой картинки')

    try {
      const response = await api.post('/users/avatar', { avatar: newAvatarUrl })
      console.log(response.data)
      if (response.data.avatar === user.avatar) {
        return setFormWar('Это фото уже установлено')
      }
      // нужно обновить кэш user через tanstack query незнаю как ?
      setFormWar('фото успешно обновлено')
      setEditView(false)
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  if (!user) return <h1>Страница не доступна! Войдите а акаунт</h1>

  return (
    <div className="profile-page">
      <h2 className="profile-page__title">{user.username}</h2>
      <div className="profile-info">
        <div className="info">
          <img
            className="avatar"
            src={user.avatar ? user.avatar : '/avatars/avatar-generations_prsz.jpg'}
            alt=""
          />
        </div>
        <div className="info">Email: {user.email}</div>
        <div className="info">Status: {user.status}</div>
        {editView && (
          <form className="edit-form" action={formSubmit}>
            <div className="edit-input__box">
              <label htmlFor="avatarUrl">Вставте ссылку на новое фото</label>
              <input
                id="avatarUrl"
                name="avatarUrl"
                className="edit-input"
                type="url"
                placeholder="image url"
                required
              />
              {editView && <button>Отправить</button>}
            </div>
          </form>
        )}
        {!editView && (
          <Button onClickHandler={() => setEditView((prev) => !prev)}>Редактировать</Button>
        )}
        {editView && <Button onClickHandler={() => setEditView((prev) => !prev)}>Отмена</Button>}

        <p className="warning">{formWar}</p>
      </div>
    </div>
  )
}
