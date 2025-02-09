import { CarBrandsList } from '../../components/popular-list-horizontal/CarBrandsList'
import { CardsList } from '../../components/cards-list/CardsList'

export function HomePage({ user }) {
  return (
    <>
      <CarBrandsList />
      <CardsList user={user} />
    </>
  )
}
