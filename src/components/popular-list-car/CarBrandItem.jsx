import './car-brand-item.css'

export function CarBrandItem({ brand, selectBrand, onBrandSelect }) {
  const isSelect = selectBrand === brand

  return (
    <div
      className={isSelect ? 'brand__item active' : 'brand__item'}
      onClick={() => onBrandSelect(brand)}
    >
      {/* <img className="popular-carlist__img" src={brand} alt="" /> */}
      <div className="brand__name">{brand}</div>
    </div>
  )
}
