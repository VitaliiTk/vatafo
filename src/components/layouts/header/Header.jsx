// libs
import { Link, useNavigate } from 'react-router-dom'

// icons
import { GoHeartFill } from 'react-icons/go'
import { CiLogin } from 'react-icons/ci'

// components
import { HeaderLogo } from '../../header-logo/HeaderLogo'
import { SearchForm } from '../../search-form/SearchForm'
// import { Button } from '../../button/Button'

// styles
import './header.css'

// jotai-store
import { useSetAtom, useAtom } from 'jotai'
import { userAtom, modalAtom } from '../../../jotai-store/jotai-store'

export function Header() {
  const [user, setUser] = useAtom(userAtom)
  const setModal = useSetAtom(modalAtom)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <SearchForm
            btnBgColor="#43d262"
            btnTextColor="#000"
            inputBgColor="#292D3E"
            inputFontColor="#fff"
            searchIconColor="#fff"
          />

          {!user && (
            <div className="user-info__wrapper">
              <div className="login__btn" onClick={() => setModal(true)}>
                <span className="login__icon">
                  <CiLogin />
                </span>{' '}
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
                  src={user.avatar ? user.avatar : '/avatars/avatar-generations_prsz.jpg'}
                  alt="avatar-image"
                />
              </span>

              <div className="user-menu">
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
                <span className="user-menu__item" onClick={logout}>
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
