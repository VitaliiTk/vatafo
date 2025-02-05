import { CarBrandItem } from '../popular-list-car/CarBrandItem'

import './car-brands-list.css'

export function CarBrandsList({ selectBrand, onBrandSelect, cardItems }) {
  const carBrandsWithCars = ['All', ...new Set(cardItems.map(item => item.brand))]
  // console.log(carBrandsWithCars)

  return (
    <section id="brands-list-horizontal">
      <div className="container">
        <div className="brands-list-horizontal__wrapper">
          <h2 className="brands__title">Брэнды авто</h2>
          <div className="brands-list">
            {carBrandsWithCars.map((brand, index) => (
              <CarBrandItem
                key={index}
                brand={brand}
                selectBrand={selectBrand}
                onBrandSelect={onBrandSelect}
                cardItems={cardItems}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
