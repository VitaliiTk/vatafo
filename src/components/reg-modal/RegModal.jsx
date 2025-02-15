import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useMutation, useQuery } from '@tanstack/react-query'

import { Button } from '../button/Button'

import { useAtom } from 'jotai'

import { modalAtom } from '../../atoms/modalsAtom'
import { reg_login_warning_Atom } from '../../atoms/warningsAtom'

import styles from './reg-modal.module.css'

// functions =======================================
import { getMe, loginUser, userRegistration } from '../../api/userApi.js'

// ==============================================
export function RegModal() {
  const [isRegView, setIsRegView] = useState(false)
  const [warning, setWarning] = useAtom(reg_login_warning_Atom)
  const [modal, setModal] = useAtom(modalAtom)

  useQuery({
    queryKey: ['user'],
    queryFn: getMe,
    enabled: !!localStorage.getItem('token')
  })

  const { mutate } = useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      setWarning(error.response?.data?.error)
    },
    onSuccess: () => {
      setModal(false)
    }
  })

  // Переключить форму на другую
  function formChangeHandler() {
    setIsRegView((prev) => !prev)
    setWarning('')
  }

  // событие при отправке формы
  async function formAction(formData) {
    // еслли форма входа активна
    if (!isRegView) {
      const email = formData.get('email') // из формы берем value, input должен иметь name='email'
      const password = formData.get('password') // из формы берем value, input должен иметь name='password'

      // если поля не заполнены проверка
      if (!email || !password) {
        return setWarning('Заполните все поля!')
      }

      mutate({ email, password })
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
        return setWarning('Заполните все поля!')
      }
      // проверка на совпадения паролей
      if (password !== passwordReply) {
        return setWarning('Пароли не совпадают!')
      }

      // запрос на сервер - регистрация
      await userRegistration(username, email, password)

      setWarning('Успешно зареган')
      setIsRegView(false)
    }
  }

  return (
    <div className={styles['reg-modal__wrapper']}>
      <div className={styles['reg-modal']}>
        <span className={styles['close-icon']} onClick={() => setModal(false)}>
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
          {warning && <span className={styles['form-warnings']}>{warning}</span>}
          <Button>{!isRegView ? 'Войти' : 'Регистрация'}</Button>
        </form>

        <span onClick={formChangeHandler} className={styles['reg-link']}>
          {isRegView ? 'У меня есть акаунт' : 'Регистрация'}
        </span>
      </div>
    </div>
  )
}
