import { HeaderLogo } from '../../header-logo/HeaderLogo'
import { GoHeartFill } from 'react-icons/go'

// import { Burger } from '../burger/Burger'
import { SearchForm } from '../../search-form/SearchForm'
import { Button } from '../../button/Button'

import './header.css'

export function Header({ user = {} }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {/* left side */}
          <div className="header__left-side">
            <HeaderLogo />
          </div>

          {/* center side */}
          <div className="header__center-side">
            <SearchForm
              btnBgColor="#43d262"
              btnTextColor="#000"
              inputBgColor="#292D3E"
              inputFontColor="#fff"
              searchIconColor="#fff"
            />
          </div>

          {/* right side */}
          <div className="header__right-side">
            {/* <span className="like">
              <GoHeartFill />
            </span> */}

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

            {!user && <div className="login__btn">Войти</div>}

            {/* <Button onHandleClick={onAddNewBtnClick} color={!isForm ? '#ff2366' : ''}>
              {isForm && isLoged ? 'Закрыть' : 'Подать объявление'}
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}
