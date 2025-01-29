import { useState } from 'react'

import { Header } from '../header/Header'
import { Banner } from '../bunner/Banner'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)

  return (
    <>
      <Header
        onHandleClick={() => setIsForm(open => !open)}
        isForm={isForm}
      />
      {isForm ? (
        <AddForm />
      ) : (
        <>
          <Banner />
          <SearchPanel />
          <CategoryList />
          <PopularListHorizontal />
          <CardsList />
        </>
      )}
    </>
  )
}

export default App
