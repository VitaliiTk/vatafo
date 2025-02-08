import { GoHeartFill } from 'react-icons/go'
import { CiLogin } from 'react-icons/ci'

import { HeaderLogo } from '../../header-logo/HeaderLogo'
import { SearchForm } from '../../search-form/SearchForm'
import { Button } from '../../button/Button'

import './header.css'

export function Header({ user = {} }) {
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
              <div className="login__btn">
                <span className="login__icon">
                  <CiLogin />
                </span>{' '}
                Войти
              </div>
            </div>
          )}
          {user && (
            <div className="user-info__wrapper">
              <span className="avatar-img__wrapper">
                <img className="avatar-img" src={user.avatarURL} alt="" />
              </span>
              <span className="username">{user.userName}</span>

              <div className="user-menu">
                <span className="user-menu__item">Мои объявления</span>
                <span className="user-menu__item">
                  <span className="like">
                    <GoHeartFill />
                  </span>
                  Избранное
                </span>
                <span className="user-menu__item">Профиль</span>
                <span className="user-menu__item">Выйти</span>
              </div>
            </div>
          )}

          {/* <Button color="#ff2366">Подать объявление</Button> */}
        </div>
      </div>
    </header>
  )
}
