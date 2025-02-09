import { IoCaretBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import styles from './error-page.module.css'

export function ErrorPage() {
  return (
    <div>
      <h2>404 ErrorPage component</h2>
      <Link to="/" className={styles['link']}>
        <span>
          <IoCaretBack />
        </span>
        Вернуться на главную
      </Link>
    </div>
  )
}
