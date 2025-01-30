// import { TfiLayoutGrid3 } from 'react-icons/tfi'
// import { IoIosArrowDown } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'

import './search-panel.css'

export function SearchPanel({ cardsSearching }) {
  //
  // search logic
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const searchValue = formData.get('search-input')

    // if (!searchValue) return
    cardsSearching(searchValue)
  }

  return (
    <div className="search-panel">
      <div className="container">
        <div className="search-panel__wrapper">
          {/* <div className="search-category__wrapper">
            <TfiLayoutGrid3 />
            <span>Все категории</span>
            <IoIosArrowDown />
          </div> */}
          <div className="search-input__wrapper">
            <form
              onSubmit={handleSubmit}
              className="search-form"
              id="search-form"
              autoComplete="off"
            >
              <span className="search-icon">
                <CiSearch />
              </span>
              <input
                className="search-input"
                type="text"
                placeholder="search..."
                name="search-input"
              />
              <button className="search-panel__btn">Поиск</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
