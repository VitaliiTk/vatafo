import { useParams } from 'react-router-dom'
import useAuthor from '../../hooks/useAuthor.js'
import { toNormalDate } from '../../utils/toNormalDate.js'
import { CardsList } from '../../components/cards-list/CardsList.jsx'
import Spinner from '../../components/spinner/Spinner.jsx'

import './user-page.css'
import { useState } from 'react'
import { useSiteName } from '../../hooks/useSiteName.js'

const disactiveAdds = []

export default function UserPage() {
  const { id } = useParams()
  const { data, isPending } = useAuthor(id)
  const [active, setActive] = useState('active')
  const siteName = useSiteName()

  if (isPending) return <Spinner />

  const author = data?.[0].User

  return (
    <div className="user-page">
      <div className="author_info">
        <div className="img__box">
          <img src={author?.avatar} alt="" />
        </div>
        <div className="author_descr">
          <div className="username">{author?.username}</div>
          <div className="author-createdAt">
            На {siteName} c {toNormalDate(author?.createdAt)}
          </div>
        </div>
      </div>

      <div className="tabs">
        <p className={active === 'active' ? 'active' : ''} onClick={() => setActive('active')}>
          Активно
        </p>
        <p
          className={active === 'disactive' ? 'active' : ''}
          onClick={() => setActive('disactive')}
        >
          Дективировано
        </p>
      </div>
      {active === 'active' && <CardsList data={data} />}
      {active === 'disactive' && <CardsList data={disactiveAdds} />}
    </div>
  )
}
