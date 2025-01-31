import { useState } from 'react'
import { useRef } from 'react'

import { v4 as uuid } from 'uuid'

// css
import './drag-drop-image-uploader.css'

// component
export function DragDropImageUploader() {
  const [images, setImages] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  console.log(images)

  const fileSelectHandler = () => {
    fileInputRef.current.click()
  }

  const onFileSelect = e => {
    const files = e.target.files // берем загружаемые файлы в переменную
    if (files === 0) return

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue // Фильтрует файлы, оставляя только изображения

      // Избегает дублирования изображений
      if (!images.some(e => e.name === files[i].name)) {
        const objectURL = URL.createObjectURL(files[i]) //Создаёт URL для предпросмотра

        // Обновляет состояние React (setImages)
        setImages(prevImages => [
          ...prevImages,
          {
            id: uuid(),
            name: files[i].name,
            url: objectURL
          }
        ])

        // Но требует очистки URL (URL.revokeObjectURL), чтобы избежать утечки памяти.
        // Освобождаем URL через 5 секунд
        setTimeout(() => URL.revokeObjectURL(objectURL), 5000)
      }
    }
  }

  // delete images from added images
  const deleteImageHandler = id => {
    const newArray = images.filter(item => item.id !== id)
    setImages(newArray)
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

    const files = Array.from(e.dataTransfer.files) // Преобразуем FileList в массив

    // Фильтруем только изображения
    const imageFiles = files.filter(file => file.type.startsWith('image/'))

    if (imageFiles.length > 0) {
      setImages(prevImages => {
        // Добавляем только новые файлы, которых ещё нет
        const newImages = imageFiles.filter(
          file => !prevImages.some(img => img.name === file.name && img.size === file.size)
        )

        return [
          ...prevImages,
          ...newImages.map(file => ({
            id: uuid(),
            name: file.name,
            size: file.size,
            url: URL.createObjectURL(file)
          }))
        ]
      })

      // Освобождаем URL после использования (чтобы не было утечек памяти)
      imageFiles.forEach(file => {
        const objectURL = URL.createObjectURL(file)
        setTimeout(() => URL.revokeObjectURL(objectURL), 5000)
      })
      console.log(images)
    }
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
        <input type="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect} />
      </div>
      <div>
        <div className="images__wrapper">
          {images.map(image => (
            <div className="image__box" key={image.id}>
              <span className="delete" onClick={() => deleteImageHandler(image.id)}>
                &times;
              </span>
              <img src={image.url} alt={image.name} />
            </div>
          ))}
        </div>
      </div>
      {/* <button type="button">Upload</button> */}
    </div>
  )
}
