import { useState, useEffect, useCallback } from 'react'
import Button from './Button'

const Slideshow = ({ screenshots = [] }) => {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const length = screenshots ? screenshots.length : 0

  if (!screenshots || length === 0) return null

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % length)
  }, [length])

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!isPlaying || length <= 1) return

    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying, handleNext, length])

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="relative flex justify-center items-center bg-black rounded-md h-[60vh] w-full p-4">
        <img
          src={screenshots[index]}
          alt={`screenshot-${index}`}
          className="flex-0 rounded-md"
        />
      </div>
      {length > 1 && (
        <div className="flex justify-between gap-4 w-full">
          <Button
            setIsPlaying={setIsPlaying}
            direction="prev"
            onClick={handlePrev}
          />
          <Button
            setIsPlaying={setIsPlaying}
            direction="next"
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  )
}

export default Slideshow
