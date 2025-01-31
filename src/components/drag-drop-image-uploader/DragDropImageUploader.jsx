import { useState } from 'react'
import { useRef } from 'react'

import { v4 as uuid } from 'uuid'

// css
import './drag-drop-image-uploader.css'

// component
export function DragDropImageUploader({ images, setImages, mainImage, onMainImageSelect }) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  // const [mainImage, setMainImage] = useState(null)

  const fileSelectHandler = () => {
    fileInputRef.current.value = null //сброс згачения перед загрузкой фойлов, фиксит невозможность загрузить повторно файлы
    fileInputRef.current.click()
  }

  // add files logic
  const addFiles = filesRaw => {
    const files = Array.from(filesRaw) // Преобразуем FileList в массив

    // Фильтруем только изображения
    const imageFiles = files.filter(file => file.type.startsWith('image/'))

    if (imageFiles.length > 0) {
      setImages(prevImages => {
        // Добавляем только новые файлы, которых ещё нет
        const newImages = imageFiles.filter(
          file => !prevImages.some(img => img.name === file.name && img.size === file.size)
        )

        const newArray = [
          ...prevImages,
          ...newImages.map(file => ({
            id: uuid(),
            name: file.name,
            size: file.size,
            url: URL.createObjectURL(file)
          }))
        ]

        return newArray
      })

      // Освобождаем URL после использования (чтобы не было утечек памяти)
      imageFiles.forEach(file => {
        const objectURL = URL.createObjectURL(file)
        setTimeout(() => URL.revokeObjectURL(objectURL), 5000)
      })
    }
  }

  const onFileSelect = e => {
    const files = e.target.files // берем загружаемые файлы в переменную
    addFiles(files)
  }

  // delete images from added images
  const deleteImageHandler = id => {
    const newArray = images.filter(item => item.id !== id)
    setImages(newArray)
    if (mainImage?.id === id) onMainImageSelect(null) // если удалил выбраную на главную картинку
  }

  const onDragOverHandler = e => {
    e.preventDefault()
    setIsDragging(true)
    e.dataTransfer.dropEffect = 'copy'
  }

  const onDragLeaveHandler = e => {
    e.preventDefault()
    setIsDragging(false)
  }

  const onDropHandler = e => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    addFiles(files)
  }

  const selectMainImage = image => {
    onMainImageSelect(image)
  }

  return (
    <div className="drag-drop-image-uploader">
      <div className="top">
        <p>Drag & Drop image uploading</p>
      </div>
      <div
        className="drag-area"
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        onDrop={onDropHandler}
        onClick={fileSelectHandler}
      >
        {isDragging ? (
          <span className="select">Drop image here</span>
        ) : (
          <>
            Drag & Drop image here or
            <span className="select">Browse</span>
          </>
        )}
        <input
          type="file"
          className="file"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
          // required
        />
      </div>
      <div>
        {images.length > 1 && <p>Выберите главное фото</p>}
        <div className="images__wrapper">
          {images.map(image => (
            <div
              className={mainImage?.id === image.id ? 'image__box active' : 'image__box'}
              key={image.id}
            >
              <span className="delete" onClick={() => deleteImageHandler(image.id)}>
                &times;
              </span>
              <img src={image.url} alt={image.name} onClick={() => selectMainImage(image)} />
            </div>
          ))}
        </div>
      </div>
      {/* <button type="button">Upload</button> */}
    </div>
  )
}
