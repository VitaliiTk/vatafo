import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

import './search-form.css'

export function SearchForm({
  cardsSearching,
  btnBgColor = 'grey',
  btnText = 'Поиск',
  btnTextColor = '#000',
  inputBgColor = '#fff',
  inputFontColor = '#000',
  searchIconColor = '#000',
  resetFilter,
  onInputClick
}) {
  const [searchInputValue, setSearchInputValue] = useState('')

  // search logic
  const handleSubmit = e => {
    e.preventDefault()
    cardsSearching(searchInputValue)
    // setSearchInputValue('')
  }

  const btnStyleMod = {
    backgroundColor: btnBgColor,
    color: btnTextColor
  }

  const searchIconStyleMod = {
    color: searchIconColor
  }

  const inputStyleMod = {
    backgroundColor: inputBgColor,
    color: inputFontColor
  }

  // когда наажали крестик в инпуте
  function resetSearchHandler(e) {
    if (e.target.value === '') {
      resetFilter()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form"
      id="search-form"
      autoComplete="off"
      onClick={onInputClick}
    >
      <span className="search-icon" style={searchIconStyleMod}>
        <CiSearch />
      </span>
      <input
        className="search-input"
        type="search"
        placeholder="search..."
        name="search-input"
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value)}
        style={inputStyleMod}
        onInput={resetSearchHandler}
      />
      <button className="search-form__btn" style={btnStyleMod}>
        {btnText}
      </button>
    </form>
  )
}
