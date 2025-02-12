// libs
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAtom, useAtomValue } from 'jotai' // for work with Jotai

// components
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

// TanstackQuery
import { useQuery } from '@tanstack/react-query'

// atoms
import { modalAtom } from '../../atoms/modalsAtom' // external store import

// styles
import './App.css'

// functions ===========================================
import { getMe } from '../../api/userApi'

// ============================================
function App() {
  // states
  const regmodal = useAtomValue(modalAtom)
  const token = localStorage.getItem('token')
  useQuery({
    queryKey: ['user'],
    queryFn: getMe,
    enabled: !!token
  })

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acount/favorites" element={<FavoritesPage />} />
            {/* <Route path="/acount/ad" element={<AddForm />} /> */}
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
