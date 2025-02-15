// libs
import { useQuery } from '@tanstack/react-query'

// components
import { CardsListItem } from '../cards-list-item/CardsListItem'

// styles
import './cards-list.css'

// api functions ====================================================================
import { getAllPosts } from '../../api/postApi'

// master ===========================================================================
export function CardsList() {
  // tanstack query
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts
  })

  console.log(data)

  if (isLoading) return <h3>Loading...</h3>

  return (
    <div className="cards-list__box">
      {data?.map((item) => (
        <CardsListItem key={item.id} card={item} />
      ))}
    </div>
  )
}
