import './car-brand-item.css'

export function CarBrandItem({ brand, selectBrand, onBrandSelect, allCars }) {
  const isSelect = selectBrand === brand

  const howMachCarsInBrandAmount =
    brand === 'All' ? allCars.length : allCars.filter(item => item.brand === brand).length
  // const allCarsAmount = cardItems.length

  return (
    <div
      className={isSelect ? 'brand__item active' : 'brand__item'}
      onClick={() => onBrandSelect(brand)}
    >
      {/* <img className="popular-carlist__img" src={brand} alt="" /> */}
      <div className="brand__name">
        {brand} <span>{howMachCarsInBrandAmount + 'шт.'}</span>
      </div>
    </div>
  )
}
