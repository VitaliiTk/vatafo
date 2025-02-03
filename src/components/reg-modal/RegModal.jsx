import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IoMdClose } from 'react-icons/io'

import { Button } from '../button/Button'

import { users } from '../../users'

import styles from './reg-modal.module.css'

export function RegModal({ onCloseRegModal, onLoginSuccess }) {
  const [testUsers, setTestUsers] = useState(users) // масив users для теста
  const [isRegView, setIsRegView] = useState(false)
  const [formWarning, setFormWarning] = useState(null)

  // console.log(testUsers)

  // событие закрытия модалки
  function closeHandler(event) {
    event.stopPropagation()
    onCloseRegModal()
  }

  // событие при отправке формы
  function formAction(formData) {
    // еслли форма входа
    if (!isRegView) {
      const email = formData.get('email')
      const password = formData.get('password')

      console.log(typeof password)

      // если поля не заполнены проверка
      if (!email || !password) {
        return setFormWarning('Заполните все поля!')
      }

      // поиск юзера в базе
      const userFromData = testUsers.find(
        user => user.email === email && user.password === password
      )

      // если user сущестует
      if (userFromData) {
        // console.log(userFromData)
        setFormWarning('Успешно вошли')
        // нужно отправить данные пользователя для использования и отображении везде в приложении
        // и закрыть модалку
        onLoginSuccess(userFromData)
        onCloseRegModal()
        return
      }

      // если user не существует
      if (!userFromData) return setFormWarning('Такого пользователя не существует')

      return
    }

    // если форма регистрации активеа
    if (isRegView) {
      const email = formData.get('email')
      const password = formData.get('password')
      const passwordReply = formData.get('password-reply')

      // если поля не заполнены
      if (!email || !password || !passwordReply) {
        return setFormWarning('Заполните все поля!')
      }
      // проверка на совпадения паролей
      if (password !== passwordReply) {
        return setFormWarning('Пароли не совпадают!')
      }

      // проверка на существуещего пользователя
      const userFromData = testUsers.find(user => user.email === email)
      if (userFromData) return setFormWarning('Такой пользователь уже существует!')

      // если все проверки прошли и пользователя не существует то добавить нового пользователя в базу данных в таблицу users
      setFormWarning('Вы успешно зарегестрированы!')
      createNewUser(email, password)

      // ! закрыть модалку
    }
  }

  // создает нового пользователя и записывает в state testUsers пока что так, потом нужно подключить базу данных
  function createNewUser(email, password) {
    const id = uuidv4()

    const newUser = {
      id,
      userName: `User ${id.slice(0, 8)}`,
      first_name: `User first name`,
      last_name: 'User last name',
      email,
      password: password,
      avatarURL: '',
      status: 'free',
      created_at: 'auto create time from DB'
    }

    setTestUsers(prev => [...prev, newUser])
  }

  // Переключить форму на другую
  function formChangeHandler() {
    setIsRegView(prev => !prev)
    setFormWarning(null)
  }

  return (
    <div className={styles['reg-modal__wrapper']}>
      <div className={styles['reg-modal']}>
        <span className={styles['close-icon']} onClick={closeHandler}>
          <IoMdClose />
        </span>
        <h2 className={styles['title']}>{!isRegView ? 'Вход в систему' : 'Регистрация'}</h2>
        <form action={formAction} className={styles['form']}>
          <div className={styles['input__wrapper']}>
            <label htmlFor="email" className={styles['lable']}>
              Введите E-mail
            </label>
            <input type="email" name="email" id="email" className={styles['input']} />
          </div>
          <div className={styles['input__wrapper']}>
            <label htmlFor="password" className={styles['lable']}>
              Введите рароль
            </label>
            <input type="password" name="password" id="password" className={styles['input']} />
          </div>

          {isRegView && (
            <div className={styles['input__wrapper']}>
              <label htmlFor="password-reply" className={styles['lable']}>
                Пароль повторно
              </label>
              <input
                type="password"
                name="password-reply"
                id="password-reply"
                className={styles['input']}
              />
            </div>
          )}

          {formWarning && <span className={styles['form-warnings']}>{formWarning}</span>}

          <Button>{!isRegView ? 'Войти' : 'Регистрация'}</Button>
        </form>

        <span onClick={formChangeHandler} className={styles['reg-link']}>
          {isRegView ? 'У меня есть акаунт' : 'Регистрация'}
        </span>
      </div>
    </div>
  )
}
