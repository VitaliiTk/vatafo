// libs
import { useMutation, useQueryClient } from '@tanstack/react-query'

// components
import { Button } from '../../components/button/Button'
import { RegModal } from '../../components/reg-modal/RegModal'

// jotai - store
import { useState } from 'react'

// styles
import './profile.css'

// services
import { UserService } from '../../services/user.service'

// master ==========================================================
export function ProfilePage() {
  const [editView, setEditView] = useState(false)
  const [formWar, setFormWar] = useState('')
  const [avatar, setAvatar] = useState('')

  const queryClient = useQueryClient() // типа подключаем для использования
  const user = queryClient.getQueryData(['user']) // только беру данные user из кэша tanstack

  // мутация данных пользователя
  const mutation = useMutation({
    mutationFn: UserService.editMe,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data) // 🔥 Обновляем кэш без повторного запроса
      setFormWar('Success') // устанавливаем оповещения в state
      setAvatar(data.avatar) // для проверки повторяемости фото
      setEditView(false) // закрываем режим редактирования
    }
  })

  // работа с формой
  async function formSubmit(formData) {
    const newAvatarUrl = formData.get('avatarUrl')
    if (!newAvatarUrl) return console.error('Вставьте URL картинки')
    if (avatar === newAvatarUrl) return setFormWar('Это фото уже установлено') // чисто для проверки тоже фото что и было
    mutation.mutate(newAvatarUrl)
  }

  if (!user) return <RegModal />

  return (
    <div className="profile-page">
      <h2 className="profile-page__title">{user.username}</h2>
      <div className="profile-info">
        <div className="info">
          <img
            className="avatar"
            src={user.avatar ? user.avatar : '/avatars/avatar-default.svg'}
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
