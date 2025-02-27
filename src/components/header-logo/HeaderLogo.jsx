import { Link } from 'react-router-dom'

import './header-logo.css'
import { useSiteName } from '../../hooks/useSiteName.js'

export function HeaderLogo() {
  const siteName = useSiteName()
  return (
    <div className="header__logo-box">
      <Link to="/" className="header__logo-text">
        {siteName}
      </Link>
    </div>
  )
}
