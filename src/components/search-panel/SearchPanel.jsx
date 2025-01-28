import { TfiLayoutGrid3 } from 'react-icons/tfi'
import { IoIosArrowDown } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'

import './search-panel.css'

export function SearchPanel() {
  return (
    <div className="search-panel">
      <div className="container">
        <div className="search-panel__wrapper">
          <div className="search-category__wrapper">
            <TfiLayoutGrid3 />
            <span>All categories</span>
            <IoIosArrowDown />
          </div>
          <div className="search-input__wrapper">
            <span className="search-icon">
              <CiSearch />
            </span>
            <input
              className="search-input"
              type="text"
              placeholder="search..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}
