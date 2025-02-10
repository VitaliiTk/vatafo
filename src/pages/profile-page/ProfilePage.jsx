// jotai - store
import { useState } from 'react'
import { useEffect } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { userAtom, userIdAtom } from '../../jotai-store/jotai-store'
import axios from 'axios'

// styles
import './profile.css'
// import api from '../../api'

export function ProfilePage() {
  const [user, setUser] = useAtom(userAtom)
  const [warning, setWarning] = useState()
  // const userId = useAtomValue(userIdAtom)

  // const fetchUserData = async () => {
  //   const token = localStorage.getItem('token')
  //   console.log(token)
  //   try {
  //     const response = await axios.get('http://localhost:3001/users/' + userId, {
  //       headers: {
  //         Authorization: `Bearer ${token}` // Передаем токен в заголовке
  //       }
  //     })

  //     console.log('User data:', response.data)
  //     const user = response.data
  //     setUser(user)
  //   } catch (error) {
  //     console.error('Error fetching user:', error.response?.data)
  //   }
  // }

  // useEffect(() => {
  //   fetchUserData()
  // }, [userId])

  if (!user) return <p>Войдите в акаунт {warning}</p>

  return (
    <div className="profile-page">
      <h2 className="profile-page__title">{user.username}</h2>
      <div className="profile-info">
        <div className="info">
          <img
            className="avatar"
            src={user.avatar ? user.avatar : '/avatars/avatar-generations_prsz.jpg'}
            alt=""
          />
        </div>
        <div className="info">Email: {user.email}</div>
        {/* <div className="info">Password: {user.password}</div> */}
        <div className="info">Status: {user.status}</div>
      </div>
    </div>
  )
}
