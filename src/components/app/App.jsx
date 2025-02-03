import { useState } from 'react'

import { Header } from '../header/Header'
// import { Banner } from '../bunner/Banner'
import { SearchForm } from '../search-form/SearchForm'
// import { CategoryList } from '../category-list/CategoryList'
import { CarBrandsList } from '../popular-list-horizontal/CarBrandsList'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../favorites-page/FavoritesPage'

import { cards, carBrands } from '../../data'

import './App.css'
import { RegModal } from '../reg-modal/RegModal'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(false)
  const [favoritesPage, setFavoritesPage] = useState(false)
  const [selectBrand, setSelectBrand] = useState('All')
  const [filteredData, setFilteredData] = useState(cardItems)
  const [searchValue, setSearchValue] = useState('')
  const [isRegModalOpen, setIsRegModalOpen] = useState(false)
  const [user, setUser] = useState(null)

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
      openRegModal()
      return
    }
    setIsForm(open => !open)
    setFavoritesPage(false)
  }

  const onFavoriteIconClickLogic = () => {
    if (!isLoged) {
      openRegModal()
      return
    }
    setFavoritesPage(true)
    setIsForm(false)
  }

  function onLoginBtnClick() {
    if (!isLoged) {
      setIsRegModalOpen(true)
    }
    if (user) setIsLoged(false)
  }

  function closeRegModal() {
    setIsRegModalOpen(false)
  }

  function openRegModal() {
    setIsRegModalOpen(true)
  }

  function onLoginSuccess(user) {
    console.log(user)
    setUser(user)
    setIsLoged(true)
  }

  return (
    <>
      <Header
        onAddNewBtnClick={!isForm ? handleClickOnAddButton : mainPageOpenLogic}
        isForm={isForm}
        isLoged={isLoged}
        onFavoriteIconClickLogic={onFavoriteIconClickLogic}
        mainPageOpenLogic={mainPageOpenLogic}
        onLoginBtnClick={onLoginBtnClick}
        user={user}
      >
        <SearchForm
          cardsSearching={cardsSearching}
          btnBgColor="#43d262"
          btnTextColor="#000"
          inputBgColor="#292D3E"
          inputFontColor="#fff"
          searchIconColor="#fff"
        />
      </Header>
      {!isForm && (
        <>
          {/* <Banner /> */}
          {/* <CategoryList /> */}
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

      {isRegModalOpen && (
        <RegModal onCloseRegModal={closeRegModal} onLoginSuccess={onLoginSuccess} />
      )}
    </>
  )
}

export default App
