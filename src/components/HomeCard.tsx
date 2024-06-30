import React, { useEffect, useRef, useState } from 'react'
import { Button } from './Button'

interface HomeCardProps {
  title: string
  imageUrl: string
  visibleText: string
  hiddenText: string
}

export const HomeCard: React.FC<HomeCardProps> = ({
  title,
  imageUrl,
  visibleText,
  hiddenText
}) => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false)
  const [hiddenTextHeight, setHiddenTextHeight] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const hiddenTextRef = useRef<HTMLParagraphElement>(null)

  const toggleTextVisibility = () => {
    setIsFullTextVisible(!isFullTextVisible)
  }

  useEffect(() => {
    if (hiddenTextRef.current) {
      setHiddenTextHeight(hiddenTextRef.current.scrollHeight)
    }
  }, [])

  return (
    <div
      className='flex flex-col bg-white shadow-md rounded-lg p-6 w-full mx-auto my-4'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {imageUrl && <img src={imageUrl} alt={title} className='w-full mb-4' />}
      <h2 className='font-caveat text-5xl font-semibold mb-2 text-center'>
        {title}
      </h2>
      <p
        id='text-1'
        className='font-sans m-0 whitespace-normal overflow-hidden transition-all duration-700 ease-in-out'
        style={{ maxWidth: 'calc(100% - 40px)' }}>
        {visibleText}
      </p>
      <p
        id='text-2'
        ref={hiddenTextRef}
        className={`font-sans m-0 whitespace-normal overflow-hidden transition-all duration-700 ease-in-out ${
          isFullTextVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maxWidth: 'calc(100% - 40px)',
          height: isFullTextVisible ? `${hiddenTextHeight}px` : '0px'
        }}>
        {hiddenText}
      </p>
      <Button
        onClick={toggleTextVisibility}
        className={`${
          isHovered || isFullTextVisible ? 'opacity-100' : 'opacity-0'
        }`}>{`Ver ${isFullTextVisible ? 'menos' : ' más'}`}</Button>
    </div>
  )
}
