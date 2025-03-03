import { useEffect } from 'react'
import styles from './delete-modal.module.css'
import { useAtomValue } from 'jotai'
import { modalAtom } from '../../store/modalsAtom'

export function DeleteModal({ yesClick, closeClick }) {
  // const isModalOpen = useAtomValue(modalAtom)
  // console.log(isModalOpen)

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
