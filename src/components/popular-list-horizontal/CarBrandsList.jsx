import { CarBrandItem } from '../popular-list-car/CarBrandItem'

import './car-brands-list.css'

export function CarBrandsList({ carBrands, selectBrand, onBrandSelect }) {
  return (
    <section id="brands-list-horizontal">
      <div className="container">
        <div className="brands-list-horizontal__wrapper">
          <h2 className="brands__title">Брэнды авто</h2>
          <div className="brands-list">
            {carBrands.map((brand, index) => (
              <CarBrandItem
                key={index}
                brand={brand}
                selectBrand={selectBrand}
                onBrandSelect={onBrandSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
