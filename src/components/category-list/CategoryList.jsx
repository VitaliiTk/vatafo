import { CategoryItem } from '../category-list-item/CategoryItem'

import './category-list.css'

import { categories } from '../../data'

export function CategoryList() {
  return (
    <section id="category-list">
      <div className="container">
        <div className="category-list__wrapper">
          {categories.map((item, i) => (
            <CategoryItem key={i} category={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
