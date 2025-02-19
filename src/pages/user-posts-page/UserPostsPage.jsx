// components
import { RegModal } from '../../components/reg-modal/RegModal'
import { CardsList } from '../../components/cards-list/CardsList'

// hooks
import useUser from '../../hooks/useUser'
import useAllUserPosts from '../../hooks/useAllUserPosts'
import UserPostList from '../../components/user-post-list/UserPostList'

// styles
import './user-posts-page.css'

export function UserPostsPage() {
  const { user } = useUser()
  const { data, error } = useAllUserPosts()

  if (!user) return <RegModal />
  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <div className="user-posts-page">
      <h2>Мои объявления</h2>
      <UserPostList data={data} />
    </div>
  )
}
