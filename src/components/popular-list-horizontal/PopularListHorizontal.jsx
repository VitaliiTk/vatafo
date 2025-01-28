import { PopularListCar } from '../popular-list-car/PopularListCar'

import { popularCars } from '../../data'

import './popular-list.css'

export function PopularListHorizontal() {
  return (
    <section id="popular-list-horizontal">
      <div className="container">
        <div className="popular-list-horizontal__wrapper">
          <h2 className="popular-list__title">
            Популярные марки авто тут
          </h2>
          <div className="popular-list">
            {popularCars.map((car, i) => (
              <PopularListCar key={i} car={car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
