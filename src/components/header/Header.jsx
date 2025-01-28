import { HeaderLogo } from '../header-logo/HeaderLogo'

import './header.css'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left-side">
            <HeaderLogo />
            <div className="burger">X</div>
            <div className="tag">Buisnes</div>
          </div>
          <div className="header__right-side">
            <div className="like">💗</div>
            <div className="login__btn">Login</div>
            <button>Submit an ad</button>
          </div>
        </div>
      </div>
    </header>
  )
}
