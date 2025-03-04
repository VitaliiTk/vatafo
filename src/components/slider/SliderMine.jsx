import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './slider-mine.module.css'
import { useState } from 'react'

export function SliderMine({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  function toLeft() {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }
  function toRight() {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  function selectImage(index) {
    setSelectedIndex(index)
  }

  return (
    <div className="slider-own">
      <div className="slider-wrapper">
        <div className={styles['main-image-wrapper']}>
          <span onClick={toLeft} className={`${styles['slider-arrows']} ${styles['left']}`}>
            <FaChevronLeft />
          </span>
          <img className={styles['main-image']} src={images[selectedIndex].image_url} alt="" />
          <span onClick={toRight} className={`${styles['slider-arrows']} ${styles['right']}`}>
            <FaChevronRight />
          </span>
        </div>
        <div className={styles['mini-images-wrapper']}>
          {images.map((image, index) => (
            <img
              key={image.id}
              className={`${styles['mini-image']} ${index === selectedIndex && styles['active']}`}
              src={image.image_url}
              alt=""
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
