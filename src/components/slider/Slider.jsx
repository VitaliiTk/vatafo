import ImageGallery from 'react-image-gallery'

export function Slider({ images }) {
  return (
    <>
      <ImageGallery items={images} showPlayButton={false} description="new" />
    </>
  )
}
