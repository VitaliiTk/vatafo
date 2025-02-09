import { IoCaretBack } from 'react-icons/io5'

import styles from './error-page.module.css'

export function ErrorPage() {
  return (
    <div>
      <h2>404 ErrorPage component</h2>
      <a className={styles['link']}>
        <span>
          <IoCaretBack />
        </span>
        Вернуться на главную
      </a>
    </div>
  )
}
