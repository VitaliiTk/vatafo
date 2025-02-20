// libs

// components
import { RegModal } from '../../components/reg-modal/RegModal'
import { CardsList } from '../../components/cards-list/CardsList'

// hooks
import useUser from '../../hooks/useUser'
import { useFavorites } from '../../hooks/useFavorites'

export function FavoritesPage() {
  const { user } = useUser()
  const { data, error } = useFavorites()

  if (!user) return <RegModal />
  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <div>
      <h2>Избранное</h2>
      <CardsList data={data} />
    </div>
  )
}
