import { useState } from 'react'
import { HeaderLogo } from '../header-logo/HeaderLogo'
import { CiHeart } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

// import { Burger } from '../burger/Burger'
import { Button } from '../button/Button'

import './header.css'

export function Header({
  onAddNewBtnClick,
  isForm,
  isLoged,
  onFavoriteIconClickLogic,
  mainPageOpenLogic,
  onLoginBtnClick,
  user,
  children
}) {
  const [miniUserModal, setMiniUserModal] = useState(false)

  function userNameHover(params) {
    console.log('user over')
  }
  function userNameOut(params) {
    console.log('user out')
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {/* left side */}
          <div className="header__left-side">
            <HeaderLogo mainPageOpenLogic={mainPageOpenLogic} />
            {/* <Burger /> */}
            {/* <div className="header__tag">Для бизнеса</div> */}
          </div>

          <div className="header__center-side">
            {/* center side */}
            {children}
          </div>

          {/* right side */}
          <div className="header__right-side">
            <span className="like" onClick={onFavoriteIconClickLogic}>
              <CiHeart />
            </span>

            {isLoged && (
              <div className="user-info__wrapper">
                {/* <span className="like">
                  <CiMail />
                </span> */}
                <span className="avatar-img__wrapper">
                  <img className="avatar-img" src={user.avatarURL} alt="" />
                </span>
                <span className="username" onMouseEnter={userNameHover} onMouseLeave={userNameOut}>
                  {user.userName}
                </span>
              </div>
            )}

            {/* {!isLoged && ( */}
            <div className="login__btn" onClick={onLoginBtnClick}>
              {!isLoged ? 'Войти' : 'Выйти'}
            </div>
            {/* )} */}

            <Button onHandleClick={onAddNewBtnClick} color={!isForm ? '#ff2366' : ''}>
              {!isForm ? 'Подать объявление' : 'Закрыть'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
