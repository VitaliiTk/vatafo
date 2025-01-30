// import { TfiLayoutGrid3 } from 'react-icons/tfi'
// import { IoIosArrowDown } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'

import './search-panel.css'

export function SearchPanel() {
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
          </div>
        </div>
      </div>
    </div>
  )
}
