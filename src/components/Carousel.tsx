import { useState, useEffect, useCallback } from 'react'
import { slugify } from '../ts/utils'
import type { CarouselItem } from '../../types'

interface CarouselProps {
  items: CarouselItem[]
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const showSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  if (items.length === 0) {
    return (
      <div className="w-100vw h-100vh flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <div className="w-24 h-24 mx-auto mb-6 text-gray-400">⚠️</div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            No Images Available
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
            There are currently no images in the carousel. Please check back
            later.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-100vw h-100vh m-0 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-1' : 'opacity-0 z-0'
            }`}
          >
            {item.data.link ? (
              <a href={`projects/${slugify(item.data.title)}`}>
                <img
                  src={item.data.url}
                  alt={item.data.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <img
                src={item.data.url}
                alt={item.data.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h2 className="text-4xl mb-4">{item.data.title}</h2>
              <p className="text-lg">{item.data.description}</p>
            </div>
          </div>
        ))}

        {/* 點點導航 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
