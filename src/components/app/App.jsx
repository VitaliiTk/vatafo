import { useState } from 'react'

import { Header } from '../header/Header'
import { Banner } from '../bunner/Banner'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../favorites-page/FavoritesPage'

import { cards } from '../../data'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(true)
  const [favoritesPage, setFavoritesPage] = useState(false)
  const [mainPage, setMainPage] = useState(true)

  const addNewObjectToCards = obj => {
    console.log(obj)

    setCardItems(prev => [...prev, obj])
    setIsForm(false)
  }

  const mainPageOpenLogic = () => {
    setMainPage(true)
    setFavoritesPage(false)
    setIsForm(false)
  }

  const handleClickOnAddButton = () => {
    if (!isLoged) {
      alert('Войдите в акаунт!')
      return
    }
    setIsForm(open => !open)
    setFavoritesPage(false)
    setMainPage(false)
  }

  const onFavoriteIconClickLogic = () => {
    if (!isLoged) {
      alert('Войдите в акаунт!')
      return
    }
    console.log('favorite page')
    setFavoritesPage(true)
    setIsForm(false)
    setMainPage(false)
  }

  return (
    <>
      <Header
        onHandleClick={
          !isForm ? handleClickOnAddButton : mainPageOpenLogic
        }
        isForm={isForm}
        isLoged={isLoged}
        onFavoriteIconClickLogic={onFavoriteIconClickLogic}
        mainPageOpenLogic={mainPageOpenLogic}
      />

      {mainPage && (
        <>
          <Banner />
          <SearchPanel />
          <CategoryList />
          <PopularListHorizontal />
          <CardsList data={cardItems} />
        </>
      )}

      {isForm && <AddForm onAddNew={addNewObjectToCards} />}

      {favoritesPage && <FavoritesPage />}
      {/* {isForm ? (
        <AddForm onAddNew={addNewObjectToCards} />
      ) : (
        <>
          <Banner />
          <SearchPanel />
          <CategoryList />
          <PopularListHorizontal />
          <CardsList data={cardItems} />
        </>
      )} */}
    </>
  )
}

export default App
