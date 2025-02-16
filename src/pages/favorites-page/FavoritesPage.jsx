// libs
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// components
// import { CardsList } from '../../components/cards-list/CardsList'
import { RegModal } from '../../components/reg-modal/RegModal'
import { getFavorites } from '../../api/favoritesApi'
import { CardsList } from '../../components/cards-list/CardsList'
import Spinner from '../../components/spinner/Spinner'

export function FavoritesPage() {
  // Tanstack get user from global state cashe
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(['user'])

  const { data } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites
  })

  if (!user) return <RegModal />

  return (
    <div>
      <h2>Избранное</h2>
      <CardsList data={data} />
    </div>
  )
}
