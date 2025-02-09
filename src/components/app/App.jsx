import { useState } from 'react'

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

function App() {
  const [user, setUser] = useState(null)
  const [modal, setModal] = useState(false)

  return (
    <div className="app">
      <Header user={user} onLoginClick={() => setModal(true)} onQuitClick={() => setUser(null)} />
      <Main></Main>
      <Footer />

      {modal && <RegModal onCloseRegModal={() => setModal(false)} />}
    </div>
  )
}

export default App
