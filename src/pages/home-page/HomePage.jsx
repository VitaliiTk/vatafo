import { CardsList } from '../../components/cards-list/CardsList'
import { useQuery, useQueryClient } from '@tanstack/react-query'

// services
import { PostsService } from '../../services/posts.service'

// master ==========================================================
export function HomePage() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: PostsService.getAll
  })
  return (
    <div>
      <h2>Главная страница</h2>
      <CardsList data={data} />
    </div>
  )
}
