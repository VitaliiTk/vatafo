// components
import { RegModal } from '../../components/reg-modal/RegModal'
import { CardsList } from '../../components/cards-list/CardsList'

// hooks
import useUser from '../../hooks/useUser'
import useAllUserPosts from '../../hooks/useAllUserPosts'

export function UserPostsPage() {
  const { user } = useUser()
  const { data, error } = useAllUserPosts()

  if (!user) return <RegModal />
  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <div>
      <h2>Мои объявления</h2>
      <CardsList data={data} />
    </div>
  )
}
