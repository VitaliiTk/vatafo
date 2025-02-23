// libs

// components
import { RegModal } from '../../components/reg-modal/RegModal'
import { CardsList } from '../../components/cards-list/CardsList'

// hooks
import useUser from '../../hooks/useUser'
import { useFavorites } from '../../hooks/useFavorites'
import Spinner from '../../components/spinner/Spinner'

export function FavoritesPage() {
  const { user } = useUser()
  const { data, error, isPending } = useFavorites()

  if (!user) return <RegModal />
  if (error) return <div>Ошибка: {error.message}</div>
  if (isPending) return <Spinner />

  return (
    <div>
      <h2>Избранное</h2>
      <CardsList data={data} />
    </div>
  )
}
