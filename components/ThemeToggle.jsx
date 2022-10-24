const ThemeToggle = ({ children, className, onClick }) => {
  return (
    <div
      className={`p-2 cursor-pointer text-black ${className}`}
      onClick={onClick}>
      {children}
    </div >
  )
}

export default ThemeToggle;