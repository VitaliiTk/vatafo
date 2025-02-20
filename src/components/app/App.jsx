// libs
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAtomValue } from 'jotai' // for work with Jotai

// components
import { Header } from '../../layouts/header/Header'
import { Main } from '../../layouts/main-layout/Main'
import { Footer } from '../../layouts/footer/Footer'

import { AddForm } from '../../pages/add-form-page/AddFormPage'
import { FavoritesPage } from '../../pages/favorites-page/FavoritesPage'
import { RegModal } from '../reg-modal/RegModal'
import { UserPostsPage } from '../../pages/user-posts-page/userPostsPage'
import { ProfilePage } from '../../pages/profile-page/ProfilePage'
import { HomePage } from '../../pages/home-page/HomePage'
import { EditPostPage } from '../../pages/edit-post-page/EditPostPage'
import { ErrorPage } from '../../pages/error-page/ErrorPage'

// atoms
import { modalAtom } from '../../store/modalsAtom' // external store import

// styles
import './App.css'
import PostPage from '../../pages/post-page/PostPage'

// ============================================
function App() {
  const regmodal = useAtomValue(modalAtom)

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
            <Route path="/acount/edit-post/:id" element={<EditPostPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
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
