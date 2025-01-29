import styles from './banner.module.css'

export function Banner() {
  return (
    <div className={styles['banner']}>
      <div className="container">
        <div className={styles['banner-img__box']}>
          <img
            className={styles['banner-img']}
            src="/banner/bmw-3.jpg"
            alt="bmw-m3"
          />
        </div>
      </div>
    </div>
  )
}
