// libs

// components
import { CardsListItem } from '../cards-list-item/CardsListItem'

// styles
import './cards-list.css'

// api functions ====================================================================
import Spinner from '../spinner/Spinner'

// master ===========================================================================
export function CardsList({ data }) {
  if (!data) return <Spinner />

  return (
    <div className="cards-list__box">
      {data?.map((item) => (
        <CardsListItem key={item.id} card={item} />
      ))}
    </div>
  )
}
