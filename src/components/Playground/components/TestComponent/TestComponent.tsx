import { useCallback, useState } from "react"
import { useClickOutside } from "./hooks"

const TestComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const menuRef = useClickOutside<HTMLDivElement>(closeMenu)

  return (
    <div ref={menuRef}>
      <button onClick={toggleMenu}>ToggleMenu</button>
      {isMenuOpen && (
        <ul>
          <li>menuItem</li>
          <li>menuItem</li>
          <li>menuItem</li>
        </ul>
      )}
    </div>
  )
}

export default TestComponent
