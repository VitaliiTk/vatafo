// libs
import { useQuery, useQueryClient } from '@tanstack/react-query'

// components
// import { CardsList } from '../../components/cards-list/CardsList'
import { RegModal } from '../../components/reg-modal/RegModal'
import { getFavorites } from '../../api/favoritesApi'
import { CardsList } from '../../components/cards-list/CardsList'

export function FavoritesPage() {
  // Tanstack get user from global state cashe
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(['user'])

  console.log(user?.id)

  const { data, isLoading } = useQuery({
    queryKey: ['favorites'],
    queryFn: () => getFavorites(user.id)
  })

  console.log(data)

  if (!user) return <RegModal />

  if (isLoading) return <h3>Loading...</h3>

  return (
    <div>
      <h2>Избранное</h2>
      {/* <CardsList /> */}
      {data.map((item) => (
        <p key={item.id}>
          Post_id: {item.post_id} - User_id: {item.user_id}
        </p>
      ))}
    </div>
  )
}
