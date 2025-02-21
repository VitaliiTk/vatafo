import { useParams } from 'react-router-dom'
import useAuthor from '../../hooks/useAuthor'
import { toNormalDate } from '../../utils/toNormalDate'
import { CardsList } from '../../components/cards-list/CardsList'
import Spinner from '../../components/spinner/Spinner'

import './author-page.css'
import { useState } from 'react'

const disactiveAdds = []

export default function AuthorPage() {
  const { id } = useParams()
  const { data, isPending } = useAuthor(id)
  const [active, setActive] = useState('active')

  if (isPending) return <Spinner />

  const author = data?.[0].User

  return (
    <div className="user-page">
      {/* <h3>Author Page</h3> */}
      <div className="author_info">
        <div className="img__box">
          <img src={author?.avatar} alt="" />
        </div>
        <div className="author_descr">
          <div className="username">{author?.username}</div>
          <div className="author-createdAt">На vatafo c {toNormalDate(author?.createdAt)}</div>
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
