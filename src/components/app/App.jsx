import { useState } from 'react'

import { Header } from '../header/Header'
import { Banner } from '../bunner/Banner'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { CarBrandsList } from '../popular-list-horizontal/CarBrandsList'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../favorites-page/FavoritesPage'
// import { SearchPage } from '../search-page/SearchPage'

import { cards, carBrands } from '../../data'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(true)
  const [favoritesPage, setFavoritesPage] = useState(false)
  const [selectBrand, setSelectBrand] = useState('All')
  const [filteredData, setFilteredData] = useState(cardItems)

  console.log(filteredData)

  // brand select
  const brandSelectHandler = brand => {
    setSelectBrand(brand)
    const newArray = cardItems.filter(item => (brand === 'All' ? item : item.car === brand))
    setFilteredData(newArray)
  }

  const cardsSearching = searchValue => {
    console.log(searchValue)

    const result = cardItems.filter(item =>
      item.info.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilteredData(result)

    setIsForm(false)
    setFavoritesPage(false)
  }

  const addNewObjectToCards = obj => {
    setCardItems(prev => [...prev, obj])
    setIsForm(false)
    setFavoritesPage(false)
  }

  const mainPageOpenLogic = () => {
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
  }

  const onFavoriteIconClickLogic = () => {
    if (!isLoged) {
      alert('Войдите в акаунт!')
      return
    }
    console.log('favorite page')
    setFavoritesPage(true)
    setIsForm(false)
  }

  return (
    <>
      <Header
        onHandleClick={!isForm ? handleClickOnAddButton : mainPageOpenLogic}
        isForm={isForm}
        isLoged={isLoged}
        onFavoriteIconClickLogic={onFavoriteIconClickLogic}
        mainPageOpenLogic={mainPageOpenLogic}
      />
      <Banner />
      <SearchPanel cardsSearching={cardsSearching} />
      <CategoryList />
      <CarBrandsList
        selectBrand={selectBrand}
        onBrandSelect={brandSelectHandler}
        carBrands={carBrands}
      />
      <CardsList data={filteredData}>Новые объявления - Кыргызстан</CardsList>

      {isForm && <AddForm onAddNew={addNewObjectToCards} />}

      {favoritesPage && <FavoritesPage />}
    </>
  )
}

export default App
