import { useState } from 'react'

import { Header } from '../header/Header'
import { Banner } from '../bunner/Banner'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../favorites-page/FavoritesPage'
import { SearchPage } from '../search-page/SearchPage'

import { cards } from '../../data'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(true)
  const [favoritesPage, setFavoritesPage] = useState(false)
  const [mainPage, setMainPage] = useState(true)
  const [searchedCards, setSearchedCards] = useState(null)

  // const searchedCards = cardsSearching

  const cardsSearching = searchValue => {
    // console.log(searchValue)
    setSearchedCards(
      cardItems.filter(item =>
        item.info.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
    // console.log(searchedCards)
    setIsForm(false)
    setMainPage(false)
    setFavoritesPage(false)
  }

  const addNewObjectToCards = obj => {
    // console.log(obj)

    setCardItems(prev => [...prev, obj])
    setIsForm(false)
    setSearchedCards(null)
    setFavoritesPage(false)
    setMainPage(true)
  }

  const mainPageOpenLogic = () => {
    setMainPage(true)
    setFavoritesPage(false)
    setIsForm(false)
    setSearchedCards(null)
  }

  const handleClickOnAddButton = () => {
    if (!isLoged) {
      alert('Войдите в акаунт!')
      return
    }
    setIsForm(open => !open)
    setFavoritesPage(false)
    setMainPage(false)
    setSearchedCards(null)
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
    setSearchedCards(null)
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
          <SearchPanel cardsSearching={cardsSearching} />
          <CategoryList />
          <PopularListHorizontal />
          <CardsList data={cardItems}>
            Новые объявления - Кыргызстан
          </CardsList>
        </>
      )}

      {isForm && <AddForm onAddNew={addNewObjectToCards} />}

      {favoritesPage && <FavoritesPage />}

      {searchedCards && (
        <SearchPage
          data={searchedCards}
          cardsSearching={cardsSearching}
        />
      )}
    </>
  )
}

export default App
