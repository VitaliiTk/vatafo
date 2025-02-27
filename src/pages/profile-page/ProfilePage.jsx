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
import useUser from '../../hooks/useUser'

// master ==========================================================
export function ProfilePage() {
  const [editView, setEditView] = useState(false)
  const [formWar, setFormWar] = useState('')
  const { user } = useUser() // подключаем хук для получения данных пользователя

  const queryClient = useQueryClient()

  // мутация данных пользователя
  const profileMutation = useMutation({
    mutationFn: UserService.editMe,
    onSuccess: () => {
      queryClient.invalidateQueries(['user'])
      setFormWar('Success') // устанавливаем оповещения в state
      setEditView(false) // закрываем режим редактирования
    }
  })

  // обработка формы
  function formAction(formData) {
    const form = new FormData()

    form.append('image', formData.get('image'))
    form.append('username', formData.get('username'))
    form.append('email', formData.get('email'))

    profileMutation.mutate(form)
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
          <form className="edit-form" action={formAction}>
            <div className="edit-input__box">
              <label htmlFor="username">Моё имя</label>
              <input
                id="username"
                name="username"
                className="edit-input"
                type="text"
                required
                defaultValue={user.username}
              />
            </div>
            <div className="edit-input__box">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="edit-input"
                type="email"
                required
                defaultValue={user.email}
              />
            </div>
            <div className="edit-input__box">
              <label htmlFor="avatar">Аватар</label>
              <input id="avatar" name="image" className="edit-input" type="file" required />
            </div>
            {editView && (
              <div className="btns">
                <button type="submit">Отправить</button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setEditView(false)
                  }}
                >
                  Закрыть
                </button>
              </div>
            )}
          </form>
        )}

        {!editView && (
          <Button onClickHandler={() => setEditView((prev) => !prev)}>Редактировать</Button>
        )}

        <p className="warning">{formWar}</p>
      </div>
    </div>
  )
}
