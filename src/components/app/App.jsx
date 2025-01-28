import { Header } from '../header/Header'
import { SearchPanel } from '../search-panel/SearchPanel'
import { CategoryList } from '../category-list/CategoryList'
import { PopularListHorizontal } from '../popular-list-horizontal/PopularListHorizontal'
import { CardsList } from '../cards-list/CardsList'

import './App.css'

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
