import { Link } from 'react-router-dom'

import './header-logo.css'

export function HeaderLogo() {
  return (
    <div className="header__logo-box">
      <Link to="/" className="header__logo-text">
        VATAFO
      </Link>
    </div>
  )
}
