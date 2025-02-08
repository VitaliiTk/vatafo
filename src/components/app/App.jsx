import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'

import { Header } from '../layouts/header/Header'
import { SearchForm } from '../search-form/SearchForm'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../../pages/favorites-page/FavoritesPage'
import { RegModal } from '../reg-modal/RegModal'
import { UserPostsPage } from '../user-posts-page/userPostsPage'

import { users } from '../../users'

import './App.css'
import { Footer } from '../layouts/footer/Footer'
import { Main } from '../layouts/main-layout/Main'
import { HomePage } from '../../pages/home-page/HomePage'

let userTest = {
  id: '001',
  userName: 'jennaLove',
  email: 'ortega@gmail.com',
  password: 'ortega123',
  avatarURL:
    'https://cdn.britannica.com/56/243656-050-2E4A5036/Jenna-Ortega-2023.jpg?w=400&h=300&c=crop',
  status: 'free',
  created_at: 'february 03 2025 19:28'
}

// userTest = null

function App() {
  const [user, setUser] = useState(userTest)

  return (
    <div className="app">
      <Header user={user} />
      <Main>
        <HomePage user={user} />

        {/* {isForm && isLoged && <AddForm onAddNew={addNewObjectToCards} user={user} />} */}

        {/*<FavoritesPage user={user} />*/}

        {/* <UserPostsPage user={user} />*/}

        {/*<EditPage />*/}
      </Main>
      <Footer />
      {/* {isRegModalOpen && (
          <RegModal
            onCloseRegModal={closeRegModal}
            onLoginSuccess={onLoginSuccess}
            testUsers={testUsers}
            addNewUserToTestUsers={addNewUserToTestUsers}
          />
        )} */}
    </div>
  )
}

export default App
