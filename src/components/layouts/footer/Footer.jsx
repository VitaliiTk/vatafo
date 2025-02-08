import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import styles from './footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['footer__wrapper']}>
          <div className={styles['footer__left-side']}>
            <div className={styles['logo']}>
              <h3 className="title">vatafo</h3>
            </div>
            <div className={styles['all-rights']}>
              <span>&copy; {year}</span>
              <span>Все права защищены</span>
            </div>
          </div>
          <div className={styles['footer__right-side']}>
            <ul className={styles['social-links']}>
              <li className={styles['social-item']}>
                <a className={styles['social-link']} href="">
                  <FaFacebook />
                </a>
              </li>
              <li className={styles['social-link']}>
                <a className="social-link" href="">
                  <FaInstagram />
                </a>
              </li>
              <li className={styles['social-link']}>
                <a className="social-link" href="">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
