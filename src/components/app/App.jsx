import { useState } from 'react'
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

// Jotai
import { useAtom } from 'jotai'
import { modalAtom, userAtom } from '../../jotai-store/jotai-store'

function App() {
  const [user, setUser] = useAtom(userAtom)
  const [modal, setModal] = useAtom(modalAtom)

  return (
    <div className="app">
      <BrowserRouter>
        <Header user={user} onLoginClick={() => setModal(true)} onQuitClick={() => setUser(null)} />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/acount/favorites" element={<FavoritesPage />} />
            <Route path="/acount/ad" element={<AddForm />} />
            <Route path="/acount/userposts" element={<UserPostsPage />} />
            <Route path="/acount/profile" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Main>
        <Footer />
        {modal && <RegModal onCloseRegModal={() => setModal(false)} />}
      </BrowserRouter>
    </div>
  )
}

export default App
