import { useState } from 'react'
import { CarBrandItem } from '../popular-list-car/CarBrandItem'

import './car-brands-list.css'
import { useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

export function CarBrandsList() {
  const [selectBrand, setSelectBrand] = useState('All')
  const [carBrands, setCarBrands] = useState([])
  const [allCars, setAllCars] = useState([])

  // const carBrandsWithCars = ['All', ...new Set(cardItems.map(item => item.brand))]
  // console.log(carBrandsWithCars)

  // brand select
  function brandSelectHandler(brand) {
    // console.log('brand select click')
    setSelectBrand(brand)
    console.log(brand)
    // const newArray = allCars.filter(item => (brand === 'All' ? item : item.brand === brand))
    // setSearchValue('')
    // setFilteredData(newArray)
    // miniModalUserInfoHandler()
  }

  async function getCarsBrands() {
    try {
      const { data } = await axios.get(BASE_URL + '/cars/brands')
      setCarBrands(data)
    } catch (error) {
      console.log(error)
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

  console.log(carBrands)

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
