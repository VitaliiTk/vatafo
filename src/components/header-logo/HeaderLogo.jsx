import './header-logo.css'

export function HeaderLogo({ mainPageOpenLogic }) {
  return (
    <div className="header__logo-box">
      {/* <img className="header__logo-img" src="/wolf_logo.png" alt="" /> */}
      <a href="/" className="header__logo-text" onClick={mainPageOpenLogic}>
        VATAFO
      </a>
    </div>
  )
}
