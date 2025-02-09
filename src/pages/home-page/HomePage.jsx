import { CarBrandsList } from '../../components/popular-list-horizontal/CarBrandsList'
import { CardsList } from '../../components/cards-list/CardsList'

export function HomePage({ user }) {
  return (
    <div>
      <h2>Все объявления</h2>
      <CarBrandsList />
      <CardsList user={user} />
    </div>
  )
}
