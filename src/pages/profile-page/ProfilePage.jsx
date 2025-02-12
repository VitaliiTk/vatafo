// libs
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../../api/axios'
// components
import { Button } from '../../components/button/Button'
// jotai - store
import { useState } from 'react'
// styles
import './profile.css'

// functions ================================================
// отправка post запроса на сервер с фото
const editUser = async (newAvatar) => {
  try {
    const { data } = await api.post('/users/avatar', { avatar: newAvatar })
    return data
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

// master ==========================================================
export function ProfilePage() {
  const [editView, setEditView] = useState(false)
  const [formWar, setFormWar] = useState('')
  const [avatar, setAvatar] = useState('')
  const queryClient = useQueryClient() // типа подключаем для использования

  const user = queryClient.getQueryData(['user']) // только беру данные user из кэша tanstack

  // мутация данных пользователя
  const mutation = useMutation({
    mutationFn: editUser,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data) // 🔥 Обновляем кэш без повторного запроса
      setFormWar('Success') // устанавливаем оповещения в state
      setAvatar(data.avatar) // чисто для проверки тоже фото что и было
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

  // if (isPending) return <h2>Loading...</h2>

  // if (isError) {
  //   console.log('Ошибка загрузки пользователя', error)
  //   // return <RegModal />
  //   return <h2>Страница не доступна! Войдите а акаунт</h2>
  // }
  // если пользователь не зарегистрирован отображать это на странице
  if (!user) return <h2>Страница не доступна! Войдите а акаунт</h2>

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
