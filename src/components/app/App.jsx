import { useState } from 'react'

import { Header } from '../header/Header'
// import { Banner } from '../bunner/Banner'
import { SearchForm } from '../search-form/SearchForm'
// import { CategoryList } from '../category-list/CategoryList'
import { CarBrandsList } from '../popular-list-horizontal/CarBrandsList'
import { CardsList } from '../cards-list/CardsList'
import { AddForm } from '../add-form/AddForm'
import { FavoritesPage } from '../favorites-page/FavoritesPage'
import { RegModal } from '../reg-modal/RegModal'
import { v4 as uuidv4 } from 'uuid'

import { cards, carBrands } from '../../data'
import { users } from '../../users'

import './App.css'

function App() {
  const [isForm, setIsForm] = useState(false)
  const [cardItems, setCardItems] = useState(cards)
  const [isLoged, setIsLoged] = useState(false)
  const [favoritesPage, setFavoritesPage] = useState(false)
  const [selectBrand, setSelectBrand] = useState('All')
  const [filteredData, setFilteredData] = useState(cardItems)
  const [searchValue, setSearchValue] = useState('')
  const [isRegModalOpen, setIsRegModalOpen] = useState(false)
  const [testUsers, setTestUsers] = useState(users) // масив users для теста
  const [user, setUser] = useState(null)
  const [favoritesList, setFavoritesList] = useState([])

  // brand select
  const brandSelectHandler = brand => {
    setSelectBrand(brand)
    const newArray = cardItems.filter(item => (brand === 'All' ? item : item.brand === brand))
    setFilteredData(newArray)
    setSearchValue('')
  }

  const cardsSearching = searchValue => {
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
    // console.log(obj)
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
    console.log(favoritesList)
  }

  function onLoginBtnClick() {
    if (!isLoged) {
      setIsRegModalOpen(true)
    }
    if (user) {
      setIsLoged(false)
      setUser(null)
      setIsForm(false)
      setFavoritesPage(false)
    }
  }

  function closeRegModal() {
    setIsRegModalOpen(false)
  }

  function openRegModal() {
    setIsRegModalOpen(true)
  }

  function onLoginSuccess(user) {
    // console.log(user)
    setUser(user)
    setIsLoged(true)
  }

  function addNewUserToTestUsers(newUser) {
    setTestUsers(prev => [...prev, newUser])
    setUser(newUser)
    setIsRegModalOpen(false)
    setIsLoged(true)
  }

  function resetFilter() {
    setFilteredData(cardItems)
    setSelectBrand('All')
  }

  // add new obj in favorites array
  function addToFavorites(card) {
    if (!isLoged) return setIsRegModalOpen(true)

    const findFavorite = favoritesList.find(
      item => item.userId === user.id && item.cardId === card.id
    )

    if (findFavorite) {
      setFavoritesList(prev => prev.filter(item => item.id !== findFavorite.id))
      console.log(`Запись с id: ${findFavorite.id} удалена`)

      return
    }

    const newFavoritePost = {
      id: uuidv4(),
      userId: user.id,
      cardId: card.id,
      created_at: new Date().toLocaleString()
    }
    console.log(newFavoritePost)
    setFavoritesList(prev => [...prev, newFavoritePost])
  }

  // console.log(`Favorites from app: `, favoritesList)

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
          resetFilter={resetFilter}
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
          <CardsList
            data={filteredData}
            testUsers={testUsers}
            addToFavorites={addToFavorites}
            isLoged={isLoged}
            favoritesList={favoritesList}
            user={user}
          >
            {filteredData.length === 0
              ? `По запросу ${
                  searchValue || selectBrand
                } ничего не найдено в категории ${selectBrand}`
              : `По запросу ${
                  searchValue || selectBrand ? searchValue || selectBrand : 'Все'
                } найдено ${filteredData.length} объявлений в категории ${selectBrand}`}
          </CardsList>
        </>
      )}

      {isForm && isLoged && <AddForm onAddNew={addNewObjectToCards} user={user} />}

      {favoritesPage && (
        <FavoritesPage
          user={user}
          favoritesList={favoritesList}
          testUsers={testUsers}
          addToFavorites={addToFavorites}
          isLoged={isLoged}
        />
      )}

      {isRegModalOpen && (
        <RegModal
          onCloseRegModal={closeRegModal}
          onLoginSuccess={onLoginSuccess}
          testUsers={testUsers}
          addNewUserToTestUsers={addNewUserToTestUsers}
        />
      )}
    </>
  )
}

export default App
