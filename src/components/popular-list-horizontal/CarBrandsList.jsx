import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import { CarBrandItem } from '../popular-list-car/CarBrandItem'

import './car-brands-list.css'

const BASE_URL = 'http://localhost:3001'

export function CarBrandsList() {
  const [selectBrand, setSelectBrand] = useState('All')
  const [carBrands, setCarBrands] = useState([])
  const [allCars, setAllCars] = useState([])
  const [error, setError] = useState('')

  // brand select
  function brandSelectHandler(brand) {
    setSelectBrand(brand)
  }

  async function getCarsBrands() {
    try {
      const { data } = await axios.get(BASE_URL + '/cars/brands')
      setCarBrands(data)
    } catch (error) {
      setError(error.message)
    }
  }
  async function getAllCars() {
    try {
      const { data } = await axios.get(BASE_URL + '/cars')
      setAllCars(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCarsBrands()
  }, [])

  useEffect(() => {
    getAllCars()
  }, [])

  if (error) return <p>{error}</p>
  if (carBrands.length === 0) return <h2>Loading...</h2>

  return (
    <div className="brands-list">
      {carBrands.map((brand, index) => (
        <CarBrandItem
          key={index}
          brand={brand}
          selectBrand={selectBrand}
          onBrandSelect={brandSelectHandler}
          allCars={allCars}
        />
      ))}
    </div>
  )
}
