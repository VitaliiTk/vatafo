// libs
import { Link, useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
// icons
import { GoHeartFill } from 'react-icons/go'
import { CiLogin } from 'react-icons/ci'
import { IoMdAddCircle } from 'react-icons/io'
// components
import { HeaderLogo } from '../../header-logo/HeaderLogo'
import { SearchForm } from '../../search-form/SearchForm'
// import { Button } from '../../button/Button'
// jotai-store
import { useSetAtom, useAtom } from 'jotai'
import { modalAtom } from '../../../atoms/modalsAtom'
// styles
import './header.css'

// ==========================================================
export function Header() {
  const setModal = useSetAtom(modalAtom)
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(['user'])

  const navigate = useNavigate()

  // Кнопка "Выход" сбрасывает кэш
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')

    // Удаляем пользователя из кэша
    queryClient.removeQueries({
      queryKey: ['user']
    })
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          {/* <SearchForm
            btnBgColor="#43d262"
            btnTextColor="#000"
            inputBgColor="#292D3E"
            inputFontColor="#fff"
            searchIconColor="#fff"
          /> */}

          {!user && (
            <div className="user-info__wrapper">
              <div className="login__btn" onClick={() => setModal(true)}>
                <span className="login__icon">
                  <CiLogin />
                </span>
                Войти
              </div>
            </div>
          )}
          {user && (
            <div className="user-info__wrapper">
              <span className="username">{user.username}</span>
              <span className="avatar-img__wrapper">
                <img
                  className="avatar-img"
                  src={user.avatar ? user.avatar : '/avatars/avatar-default.svg'}
                  alt="avatar-image"
                />
              </span>

              <div className="user-menu">
                <Link to="/acount/ad" className="user-menu__item">
                  <span className="icon-add-new">
                    <IoMdAddCircle />
                  </span>
                  Создать новое
                </Link>
                <Link to="/acount/userposts" className="user-menu__item">
                  Мои объявления
                </Link>
                <Link to="/acount/favorites" className="user-menu__item">
                  <span className="like">
                    <GoHeartFill />
                  </span>
                  Избранное
                </Link>
                <Link to="/acount/profile" className="user-menu__item">
                  Профиль
                </Link>
                <span className="user-menu__item" onClick={handleLogout}>
                  Выйти
                </span>
              </div>
            </div>
          )}
          {/* <Button color="#ff2366">Подать объявление</Button> */}
        </div>
      </div>
    </header>
  )
}
