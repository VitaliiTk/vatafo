import { Header } from '../header/Header'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'

import './App.css'
import { CardsList } from '../cards-list/CardsList'

function App() {
  return (
    <>
      <Header />
      <SearchPanel />
      <CategoryList />
      <PopularListHorizontal />
      <CardsList />
    </>
  )
}

export default App
