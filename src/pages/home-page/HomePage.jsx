import { CardsList } from '../../components/cards-list/CardsList'

// services
import useAllPosts from '../../hooks/useAllPosts'
import useUser from '../../hooks/useUser'

// master ==========================================================
export function HomePage() {
  const { data, error } = useAllPosts()

  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <div>
      <h2>Главная страница</h2>
      <CardsList data={data} />
    </div>
  )
}
