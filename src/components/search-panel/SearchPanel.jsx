import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

import './search-panel.css'

export function SearchPanel({ cardsSearching }) {
  const [searchInputValue, setSearchInputValue] = useState('')

  // search logic
  const handleSubmit = e => {
    e.preventDefault()
    cardsSearching(searchInputValue)
    setSearchInputValue('')
  }

  return (
    <div className="search-panel">
      <div className="container">
        <div className="search-panel__wrapper">
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
                type="search"
                placeholder="search..."
                name="search-input"
                value={searchInputValue}
                onChange={e => setSearchInputValue(e.target.value)}
              />
              <button className="search-panel__btn">Поиск</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
