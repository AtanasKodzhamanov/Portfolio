const Bubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center b-2 b-black radius-md p-1 bg-[linear-gradient(to right, #091a0619, #88866e00)]">
      {children}
    </div>
  )
}
export default Bubble
