import { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IoMdClose } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import api from '../../api'

import { Button } from '../button/Button'

import styles from './reg-modal.module.css'
import { useAtom } from 'jotai'
import { modalAtom, userAtom } from '../../jotai-store/jotai-store'

export function RegModal({ onCloseRegModal }) {
  const [isRegView, setIsRegView] = useState(false)
  const [formWarning, setFormWarning] = useState(null)
  const [modal, setModal] = useAtom(modalAtom)
  const [user, setUser] = useAtom(userAtom)

  const navigate = useNavigate()

  // событие закрытия модалки
  function closeHandler(event) {
    event.stopPropagation()
    // onCloseRegModal()
    setModal(false)
  }

  const fetchUserData = async () => {
    const token = localStorage.getItem('token')
    console.log(token)
    try {
      const response = await axios.get('http://localhost:3001/users/me', {
        headers: {
          Authorization: `Bearer ${token}` // Передаем токен в заголовке
        }
      })
      console.log('User data:', response.data)
      const user = response.data
      setUser(user)
    } catch (error) {
      console.error('Error fetching user:', error.response?.data)
    }
  }

  // событие при отправке формы
  async function formAction(formData) {
    // еслли форма входа
    if (!isRegView) {
      const email = formData.get('email')
      const password = formData.get('password')

      // если поля не заполнены проверка
      if (!email || !password) {
        return setFormWarning('Заполните все поля!')
      }

      try {
        const response = await axios.post('http://localhost:3001/auth/login', { email, password })
        const { token } = response.data
        localStorage.setItem('token', token)
        console.log('Login successfull: ', response.data)

        // Добавляем токен в API-инстанс
        // api.defaults.headers.Authorization = `Bearer ${token}` // отдельный файл можно использовать с axios делает инстанс запроса
        fetchUserData()
        setModal(false)
        navigate('/')
      } catch (error) {
        setFormWarning(error.response?.data?.error || 'Что-то пошло не так')
      }

      return
    }

    // если форма регистрации активна - регистрируемя
    if (isRegView) {
      const username = formData.get('username')
      const email = formData.get('email')
      const password = formData.get('password')
      const passwordReply = formData.get('password-reply')

      // если поля не заполнены
      if (!username || !email || !password || !passwordReply) {
        return setFormWarning('Заполните все поля!')
      }
      // проверка на совпадения паролей
      if (password !== passwordReply) {
        return setFormWarning('Пароли не совпадают!')
      }

      // запрос на сервер - регистрация
      try {
        await axios.post('http://localhost:3001/auth/register', {
          username,
          email,
          password
        })

        setFormWarning('Успешно зареган')
        setIsRegView(false)
      } catch (error) {
        setFormWarning(error.response?.data?.error || 'Что-то пошло не так')
      }
    }
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
          {isRegView && (
            <div className={styles['input__wrapper']}>
              <label htmlFor="username" className={styles['lable']}>
                username
              </label>
              <input type="text" name="username" id="username" className={styles['input']} />
            </div>
          )}

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
