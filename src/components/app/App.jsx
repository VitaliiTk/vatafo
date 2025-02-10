import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from '../layouts/header/Header'
import { AddForm } from '../../pages/add-form-page/AddFormPage'
import { FavoritesPage } from '../../pages/favorites-page/FavoritesPage'
import { RegModal } from '../reg-modal/RegModal'
import { UserPostsPage } from '../user-posts-page/userPostsPage'
import { ProfilePage } from '../../pages/profile-page/ProfilePage'
import { Main } from '../layouts/main-layout/Main'
import { HomePage } from '../../pages/home-page/HomePage'
import { Footer } from '../layouts/footer/Footer'
import { ErrorPage } from '../../pages/error-page/ErrorPage'

import './App.css'

// Jotai-store
import { useAtom, useAtomValue } from 'jotai' // for work with Jotai
import { modalAtom, userAtom, userIdAtom } from '../../jotai-store/jotai-store' // external store import
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const regmodal = useAtomValue(modalAtom)
  const [user, setUser] = useAtom(userAtom)
  const [userId, setUserId] = useAtom(userIdAtom)

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token')
      console.log(token)
      try {
        const response = await axios.get('http://localhost:3001/users/me', {
          headers: {
            Authorization: `Bearer ${token}` // Передаем токен в заголовке
          }
        })
        console.log('User data:', response.data)
        const user = response.data
        setUser(user)
      } catch (error) {
        console.error('Error fetching user:', error.response?.data)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acount/favorites" element={<FavoritesPage />} />
            <Route path="/acount/ad" element={<AddForm />} />
            <Route path="/acount/userposts" element={<UserPostsPage />} />
            <Route path="/acount/profile" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Main>
        <Footer />
        {regmodal && <RegModal />}
      </BrowserRouter>
    </div>
  )
}

export default App
