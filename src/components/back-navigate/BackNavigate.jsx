import { MdArrowBackIos } from 'react-icons/md'

import './back-navigate.css'
import { useNavigate } from 'react-router-dom'

export function BackNavigate() {
  const navigate = useNavigate()
  return (
    <div className="back" onClick={() => navigate(-1)}>
      <span>
        <MdArrowBackIos /> назад
      </span>
    </div>
  )
}
