import { useNavigate } from 'react-router-dom'
import styles from './add-new-btn.module.css'

export function AddNewBtn() {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper} onClick={() => navigate('/acount/ad')}>
      <span className={styles.inner}>Add New</span>
    </div>
  )
}
