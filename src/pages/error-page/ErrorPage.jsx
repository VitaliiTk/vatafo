import { IoCaretBack } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

import './error-page.css'

export function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="error-page">
      <div className="error-page__wrapper">
        <h2>Error 404 страница не существует</h2>
        <p className="link" onClick={() => navigate(-1)}>
          <span>
            <IoCaretBack />
          </span>
          Вернуться назад
        </p>
      </div>
    </div>
  )
}
