import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './slider-mine.module.css'
import { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import useDeleteImage from '../../hooks/useDeleteImage'
import Spinner from '../spinner/Spinner'
import useUpdateMainImage from '../../hooks/useUpdateMainImage'
import { useEffect } from 'react'

export function SliderMine({ images, isAuthorOfPost, post }) {
  const deleteImage = useDeleteImage()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const updateMainImageMutation = useUpdateMainImage(post.id)

  // Локальное состояние для мгновенного обновления UI
  const [mainImage, setMainImage] = useState(post.main_image)

  // Синхронизация mainImage с post.main_image при изменении post
  useEffect(() => {
    setMainImage(post.main_image)
  }, [post.main_image])

  function toLeft() {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }
  function toRight() {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  function handlleDelete(image) {
    console.log(image.id)
    deleteImage.mutate(image.id, {
      onSuccess: () => {
        // Обновляем кэш (это уже происходит в useDeleteImage)

        if (images.length === 1) {
          setSelectedIndex(0) // Если это последняя картинка, сбрасываем индекс
        } else if (selectedIndex >= images.length - 1) {
          setSelectedIndex(selectedIndex - 1) // Если удаляем последнюю в массиве , выбираем предыдущую
        }
      }
    })
  }

  function doMainImage(image_id) {
    setMainImage(images.find((img) => img.id === image_id).image_url) // Мгновенное обновление UI
    updateMainImageMutation.mutate(image_id)
  }

  if (!images) return <Spinner />

  return (
    <div className="slider-own">
      <div className="slider-wrapper">
        <div className={styles['main-image-wrapper']}>
          <span onClick={toLeft} className={`${styles['slider-arrows']} ${styles['left']}`}>
            <FaChevronLeft />
          </span>
          <img className={styles['main-image']} src={images[selectedIndex].image_url} alt="" />
          {isAuthorOfPost && (
            <div className={styles['image-control-for-author']}>
              <span
                className={`${styles['do-main']} ${
                  mainImage === images[selectedIndex].image_url && styles['select']
                }`}
              >
                {mainImage === images[selectedIndex].image_url ? (
                  'Главное'
                ) : (
                  <span onClick={() => doMainImage(images[selectedIndex].id)}>Сделать главным</span>
                )}
              </span>
              {mainImage !== images[selectedIndex].image_url && (
                <span
                  className={styles['delete-icon']}
                  onClick={() => handlleDelete(images[selectedIndex])}
                >
                  <TiDeleteOutline />
                </span>
              )}
            </div>
          )}

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
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
