import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

export function useToggle(on: boolean): [boolean, () => void] {
  const [state, setState] = useState(on)
  const toggle = useCallback(() => {
    setState((prev) => !prev)
  }, [])

  return [state, toggle]
}

type Timer = ReturnType<typeof setTimeout>
/**
 *
 * @param func The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */

export function useDebounceFunc<T extends (...args: any) => ReturnType<T>>(
  func: T,
  delay = 1000,
) {
  const timer = useRef<Timer>()
  return (...args: any[]) => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => func(...args), delay)
  }
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounced
}

export function usePrevious<T>(value: T): T | undefined {
  const previous = useRef<T | undefined>()
  useEffect(() => {
    previous.current = value
  }, [value])

  return previous.current
}
