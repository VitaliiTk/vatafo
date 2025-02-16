import { CarBrandsList } from '../../components/popular-list-horizontal/CarBrandsList'
import { CardsList } from '../../components/cards-list/CardsList'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../../api/postApi'

export function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts
  })
  return (
    <div>
      <h2>Главная страница</h2>
      {/* <CarBrandsList /> */}
      <CardsList data={data} />
    </div>
  )
}
