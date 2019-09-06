import React, { useRef, useEffect, useState } from 'react'
import { Heart as HeartOutline } from 'styled-icons/boxicons-regular/Heart'
// import { Heart as HeartSolid } from 'styled-icons/boxicons-solid/Heart'
import { ChevronRight } from 'styled-icons/fa-solid/ChevronRight'
import { ChevronLeft } from 'styled-icons/fa-solid/ChevronLeft'

import { ImagesWrapper, ViewingWindow, ArrowRight, ArrowLeft, Backdrop } from './styles'

const Images = ({ name, images }) => {
  const [offsetX, setOffsetX] = useState(0)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  const imagesRef = useRef(null)

  useEffect(() => {
    async function onResize() {
      await new Promise(resolve => setTimeout(resolve, 100))
      const { innerWidth } = window
      const { clientWidth } = imagesRef.current

      if (clientWidth > innerWidth) {
        setCanScrollRight(true)
      } else {
        setOffsetX((innerWidth - clientWidth) / 2)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  function onArrowClick(direction) {
    const { innerWidth } = window
    const { clientWidth } = imagesRef.current
    const absOffsetX = Math.abs(offsetX)
    const fullSlide = innerWidth * 0.8

    if (direction === 'right' && canScrollRight) {
      let distance = clientWidth - absOffsetX - innerWidth
      let canScroll = false
      if (distance > fullSlide) {
        distance = fullSlide
        canScroll = true
      }
      setOffsetX(x => x - distance)
      setCanScrollLeft(true)
      setCanScrollRight(canScroll)
    } else if (direction === 'left' && canScrollLeft) {
      let distance = fullSlide
      let canScroll = false
      if (absOffsetX > fullSlide) {
        canScroll = true
      } else {
        distance = absOffsetX
      }
      setOffsetX(x => x + distance)
      setCanScrollLeft(canScroll)
      setCanScrollRight(true)
    }
  }

  return (
    <ImagesWrapper>
      <Backdrop image={images[0]} />
      <HeartOutline className='heart' size={25} />
      <ViewingWindow ref={imagesRef} offsetX={offsetX}>
        {images.map(image => (
          <img key={image} src={image} alt={name} />
        ))}
      </ViewingWindow>
      <ArrowLeft show={canScrollLeft} onClick={() => onArrowClick('left')}>
        <ChevronLeft size={30} />
      </ArrowLeft>
      <ArrowRight show={canScrollRight} onClick={() => onArrowClick('right')}>
        <ChevronRight size={30} />
      </ArrowRight>
    </ImagesWrapper>
  )
}

export default Images
