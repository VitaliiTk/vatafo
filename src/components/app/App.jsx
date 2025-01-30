import { useState } from 'react'

import { Header } from '../header/Header'
import { Banner } from '../bunner/Banner'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'

import { cards } from '../../data'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(false)

  const addNewObjectToCards = obj => {
    console.log(obj)

    setCardItems(prev => [...prev, obj])
    setIsForm(false)
  }

  const handleClickOnAddButton = () => {
    if (!isLoged) return alert('Войдите в акаунт')
    setIsForm(open => !open)
  }

  return (
    <>
      <Header
        onHandleClick={handleClickOnAddButton}
        isForm={isForm}
        isLoged={isLoged}
      />
      {isForm ? (
        <AddForm onAddNew={addNewObjectToCards} />
      ) : (
        <>
          <Banner />
          <SearchPanel />
          <CategoryList />
          <PopularListHorizontal />
          <CardsList data={cardItems} />
        </>
      )}
    </>
  )
}

export default App
