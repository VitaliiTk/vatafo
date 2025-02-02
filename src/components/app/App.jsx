import { useState } from 'react'

import { Header } from '../header/Header'
import { Banner } from '../bunner/Banner'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { CarBrandsList } from '../popular-list-horizontal/CarBrandsList'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../favorites-page/FavoritesPage'

import { cards, carBrands } from '../../data'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(true)
  const [favoritesPage, setFavoritesPage] = useState(false)
  const [selectBrand, setSelectBrand] = useState('All')
  const [filteredData, setFilteredData] = useState(cardItems)
  const [searchValue, setSearchValue] = useState('')

  // console.log(filteredData)

  // brand select
  const brandSelectHandler = brand => {
    setSelectBrand(brand)
    const newArray = cardItems.filter(item => (brand === 'All' ? item : item.brand === brand))
    setFilteredData(newArray)
    setSearchValue('')
  }

  const cardsSearching = searchValue => {
    console.log(searchValue)

    const result = cardItems.filter(
      item =>
        (selectBrand === 'All' || item.brand === selectBrand) &&
        item.info.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilteredData(result)

    setIsForm(false)
    setFavoritesPage(false)

    setSearchValue(searchValue)
  }

  const addNewObjectToCards = obj => {
    console.log(obj)
    setCardItems(prev => [...prev, obj])
    setFilteredData([...cardItems, obj])
    setSelectBrand('All')
    setIsForm(false)
    setFavoritesPage(false)
  }

  const mainPageOpenLogic = () => {
    setFavoritesPage(false)
    setIsForm(false)
    setSelectBrand('All')
    setFilteredData(cardItems)
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
      {!isForm && (
        <>
          <Banner />
          <SearchPanel cardsSearching={cardsSearching} />
          <CategoryList />
          <CarBrandsList
            selectBrand={selectBrand}
            onBrandSelect={brandSelectHandler}
            carBrands={carBrands}
          />
          <CardsList data={filteredData}>
            {filteredData.length === 0
              ? `По запросу ${searchValue || selectBrand} ничего не найдено`
              : `По запросу ${
                  searchValue || selectBrand ? searchValue || selectBrand : 'Все'
                } найдено ${filteredData.length} объявлений`}
            {/* Новые объявления - Кыргызстан */}
          </CardsList>
        </>
      )}

      {isForm && <AddForm onAddNew={addNewObjectToCards} />}

      {favoritesPage && <FavoritesPage />}
    </>
  )
}

export default App
