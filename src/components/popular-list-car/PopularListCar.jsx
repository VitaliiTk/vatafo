import './popular-list-car-item.css'

export function PopularListCar({ car }) {
  return (
    <div className="popular-carlist__item">
      <img className="popular-carlist__img" src={car.img} alt="" />
      <div className="popular-carlist__name">{car.name}</div>
    </div>
  )
}
