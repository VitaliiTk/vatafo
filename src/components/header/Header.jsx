import { HeaderLogo } from '../header-logo/HeaderLogo'
import { CiHeart } from 'react-icons/ci'

import { Burger } from '../burger/Burger'

import './header.css'
import { Button } from '../button/Button'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left-side">
            <HeaderLogo />
            <Burger />
            <div className="header__tag">Для бизнеса</div>
          </div>
          <div className="header__right-side">
            <span className="like">
              <CiHeart />
            </span>
            <div className="login__btn">Войти</div>
            <Button color="#ff2366">Подать объявление</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
