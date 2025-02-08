import { useState } from 'react'

import { Header } from '../layouts/header/Header'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../../pages/favorites-page/FavoritesPage'
import { RegModal } from '../reg-modal/RegModal'
import { UserPostsPage } from '../user-posts-page/userPostsPage'
import { Main } from '../layouts/main-layout/Main'
import { HomePage } from '../../pages/home-page/HomePage'
import { Footer } from '../layouts/footer/Footer'

import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [modal, setModal] = useState(false)

  return (
    <div className="app">
      <Header user={user} onLoginClick={() => setModal(true)} onQuitClick={() => setUser(null)} />
      <Main>
        <HomePage user={user} />

        {/*<AddForm onAddNew={addNewObjectToCards} user={user} />*/}

        {/*<FavoritesPage user={user} />*/}

        {/* <UserPostsPage user={user} />*/}

        {/*<EditPage />*/}
      </Main>
      <Footer />

      {modal && (
        <RegModal
          onCloseRegModal={() => setModal(false)}
          // onLoginSuccess={onLoginSuccess}
        />
      )}
    </div>
  )
}

export default App
