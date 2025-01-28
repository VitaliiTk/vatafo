import './category-item.css'

export function CategoryItem({ category }) {
  return (
    <div className="category-item">
      <div className="category-item__text">{category.name}</div>
      <img
        className="category-item__img"
        src={category.img}
        alt="transport"
      />
    </div>
  )
}
