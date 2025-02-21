import { IoCaretBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import './error-page.css'

export function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page__wrapper">
        <h2>Error 404 страница не существует</h2>
        <Link to="/" className="link">
          <span>
            <IoCaretBack />
          </span>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
