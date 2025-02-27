import styles from './delete-modal.module.css'

export function DeleteModal({ yesClick, closeClick }) {
  function handleYesClick() {
    yesClick()
  }

  function handleCancelClick() {
    closeClick()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className="text">Вы уверены что хотите удалить пост? Это действие безвозвратно!</div>
        <div className={styles.btns}>
          <button onClick={handleYesClick} className={styles['delete-btn']}>
            Удалить
          </button>
          <button onClick={handleCancelClick}>Отмена</button>
        </div>
      </div>
    </div>
  )
}
