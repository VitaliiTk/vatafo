// libs
import { useQueryClient } from '@tanstack/react-query'

// components
import { RegModal } from '../reg-modal/RegModal'

// styles
// import styles from './user-posts-page.module.css'

export function UserPostsPage() {
  // Tanstack get user from global state cashe
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(['user'])

  if (!user) return <RegModal />

  return (
    <div>
      <h2>Мои объявления</h2>
    </div>
  )
}
