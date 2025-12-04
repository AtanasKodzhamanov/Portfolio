import 'primeicons/primeicons.css'

type Props = {
  setIsPlaying: (v: boolean) => void
  direction: 'prev' | 'next'
  onClick: () => void
}

const Button = ({ setIsPlaying, direction, onClick }: Props) => {
  const isPrev = direction === 'prev'

  return (
    <button
      className="w-full h-[5%] bg-black text-white cursor-pointer text-[2rem] z-10 border-none hover:bg-[var(--secondary-color)] rounded-md"
      onClick={() => {
        setIsPlaying(false)
        onClick()
      }}
      aria-label={isPrev ? 'Previous screenshot' : 'Next screenshot'}
    >
      <i
        className={`pi ${
          isPrev ? 'pi-chevron-left' : 'pi-chevron-right'
        } text-white text-[2rem]`}
      ></i>
    </button>
  )
}

export default Button
