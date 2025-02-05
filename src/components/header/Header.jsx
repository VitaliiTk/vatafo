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
  openUserPostsPage,
  children
}) {
  const [miniUserModal, setMiniUserModal] = useState(false)

  function userMiniModalHandler(e) {
    setMiniUserModal(prev => !prev)
  }

  function quitHandler() {
    setMiniUserModal(false)
    onLoginBtnClick()
  }

  function onUserPostsClick() {
    openUserPostsPage()
    setMiniUserModal(false)
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
                <span className="avatar-img__wrapper" onClick={userMiniModalHandler}>
                  <img className="avatar-img" src={user.avatarURL} alt="" />
                </span>
                <span className="username" onClick={userMiniModalHandler}>
                  {user.userName}
                </span>

                {miniUserModal && (
                  <div className="miniUserModal">
                    <span className="miniUserModal__item" onClick={onUserPostsClick}>
                      Мои объявления
                    </span>
                    <span className="miniUserModal__item">Профиль</span>
                    <span className="miniUserModal__item" onClick={quitHandler}>
                      Выйти
                    </span>
                  </div>
                )}
              </div>
            )}

            {!isLoged && (
              <div className="login__btn" onClick={onLoginBtnClick}>
                Войти
              </div>
            )}

            <Button onHandleClick={onAddNewBtnClick} color={!isForm ? '#ff2366' : ''}>
              {isForm && isLoged ? 'Закрыть' : 'Подать объявление'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
