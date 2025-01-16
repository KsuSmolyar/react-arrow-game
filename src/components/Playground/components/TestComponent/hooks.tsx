import { useCallback, useEffect, useRef, useState } from "react"

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const domRef = useRef<T>(null)

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (
        e.target &&
        domRef.current &&
        !domRef.current.contains(e.target as Node)
      ) {
        callback()
        return
      }
    },
    [callback],
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [handleClick])
  return domRef
}

export function useToggle(on: boolean): [boolean, () => void] {
  const [state, setState] = useState(on)
  const toggle = useCallback(() => setState((prev) => !prev), [])
  return [state, toggle]
}
