import { HeaderLogo } from '../header-logo/HeaderLogo'
import { CiHeart } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

import { Burger } from '../burger/Burger'
import { Button } from '../button/Button'

import './header.css'

export function Header({ onHandleClick, isForm, isLoged }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left-side">
            <HeaderLogo />
            <Burger />
            <div className="header__tag">Для бизнеса</div>
          </div>

          {/* right side */}
          <div className="header__right-side">
            <span className="like" onClick={onHandleClick}>
              <CiHeart />
            </span>

            {isLoged && (
              <>
                <span className="like">
                  <CiMail />
                </span>
                <span>AVATAR IMG</span>
                <span>Username</span>
              </>
            )}

            {!isLoged && (
              <div className="login__btn" onClick={onHandleClick}>
                Войти
              </div>
            )}

            <Button
              onHandleClick={onHandleClick}
              color={!isForm ? '#ff2366' : ''}
            >
              {!isForm ? 'Подать объявление' : 'Закрыть'}
            </Button>
          </div>
        </div>
        {/* right side end */}
      </div>
    </header>
  )
}
