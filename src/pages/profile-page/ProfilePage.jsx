import { Button } from '../../components/button/Button'
// jotai - store
import { useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { userAtom, userIdAtom } from '../../jotai-store/jotai-store'

// styles
import './profile.css'

// axios
import api from '../../api.axios'

export function ProfilePage() {
  const [user, setUser] = useAtom(userAtom)
  const [warning, setWarning] = useState()
  const [editView, setEditView] = useState(false)
  const [formWar, setFormWar] = useState('')

  async function formSubmit(formData) {
    const newAvatarUrl = formData.get('avatarUrl')
    if (!newAvatarUrl) return console.error('Вставьте URL новой картинки')

    try {
      const response = await api.post('/users/avatar', { avatar: newAvatarUrl })
      console.log(response.data)
      if (response.data.avatar === user.avatar) {
        return setFormWar('Это фото уже установлено')
      }
      setUser({ ...user, avatar: response.data.avatar })
      setFormWar('фото успешно обновлено')
      setEditView(false)
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  if (!user) return <p>Войдите в акаунт {warning}</p>

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
