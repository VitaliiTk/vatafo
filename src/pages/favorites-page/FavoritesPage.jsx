// libs
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// components
// import { CardsList } from '../../components/cards-list/CardsList'
import { RegModal } from '../../components/reg-modal/RegModal'

// services
import { FavoritesService } from '../../services/favorites.service'

import { CardsList } from '../../components/cards-list/CardsList'
import useUser from '../../hooks/useUser'
import useFavorites from '../../hooks/useFavorites'

export function FavoritesPage() {
  // Tanstack get user from global state cashe
  const { user } = useUser()
  const { data } = useFavorites()

  if (!user) return <RegModal />
  // if (!user) setModal(true)

  return (
    <div>
      <h2>Избранное</h2>
      <CardsList data={data} />
    </div>
  )
}
