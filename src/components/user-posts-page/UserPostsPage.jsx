// libs
import { useQuery, useQueryClient } from '@tanstack/react-query'

// components
import { RegModal } from '../reg-modal/RegModal'
import { CardsList } from '../cards-list/CardsList'
import { getUserPosts } from '../../api/postApi'

// styles
// import styles from './user-posts-page.module.css'

export function UserPostsPage() {
  // Tanstack get user from global state cashe
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(['user'])

  const { data, isPending, isError } = useQuery({
    queryKey: ['user-posts'],
    queryFn: getUserPosts,
    enabled: !!user
  })

  if (!user) return <RegModal />

  return (
    <div>
      <h2>Мои объявления</h2>
      <CardsList data={data} />
    </div>
  )
}
