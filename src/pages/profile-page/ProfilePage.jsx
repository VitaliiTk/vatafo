import { useAtom } from 'jotai'

// store
import { userAtom } from '../../jotai-store/jotai-store'

// styles
import './profile.css'

export function ProfilePage() {
  const [user] = useAtom(userAtom)

  if (!user) return <p>Войдите в акаунт</p>

  return (
    <div className="profile-page">
      <h2 className="profile-page__title">{user.userName}</h2>
      <div className="profile-info">
        <div className="info">
          <img className="avatar" src={user.avatarURL} alt="" />
        </div>
        <div className="info">Email: {user.email}</div>
        <div className="info">Password: {user.password}</div>
        <div className="info">Status: {user.status}</div>
      </div>
    </div>
  )
}
