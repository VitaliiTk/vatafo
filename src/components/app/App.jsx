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

import api from '../../api.axios'

import './App.css'

// TanstackQuery
import { useQuery } from '@tanstack/react-query'

// Jotai-store
import { useAtom, useAtomValue } from 'jotai' // for work with Jotai
import { modalAtom, userAtom } from '../../jotai-store/jotai-store' // external store import

function App() {
  const regmodal = useAtomValue(modalAtom)
  const [user, setUser] = useAtom(userAtom)

  const { data, isPending, error } = useQuery({
    queryKey: ['user'],
    queryFn: getMe
  })

  async function getMe() {
    try {
      const response = await api.get('/users/me')
      setUser(response.data)
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  }

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
