import { Header } from '../header/Header'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'
import { CardsList } from '../cards-list/CardsList'

import './App.css'
import { Banner } from '../bunner/Banner'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <SearchPanel />
      <CategoryList />
      <PopularListHorizontal />
      <CardsList />
    </>
  )
}

export default App
