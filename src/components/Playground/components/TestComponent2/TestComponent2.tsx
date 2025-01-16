import { useState } from "react"
import { useDebounce, useDebounceFunc, usePrevious, useToggle } from "./hooks"

const TestComponent2: React.FC = () => {
  const [isMenuOpen, toggle] = useToggle(false)
  const [inputValue, setInputValue] = useState<string>("")
  const debouncedValue = useDebounce(inputValue, 500)

  const toggleMenu = () => {
    toggle()
  }

  const debouncedFunc = useDebounceFunc(setInputValue, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFunc(e.target.value)
  }

  const prev = usePrevious(3)

  return (
    <>
      <div>
        <button onClick={toggleMenu}>ToggleMenu2</button>
        {isMenuOpen && (
          <ul>
            <li>menuItem</li>
            <li>menuItem</li>
            <li>menuItem</li>
          </ul>
        )}
      </div>
      <div>
        <form>
          <label htmlFor="textInput">Введите текст</label>
          <input
            type="text"
            name="textInput"
            id="textInput"
            defaultValue={inputValue}
            onChange={handleChange}
          />
        </form>
        <span>debouncedValueFromFunc: {inputValue}</span>
        <br />
        <span>debouncedValue: {debouncedValue}</span>
      </div>
      <div>
        <h3>usePrevious</h3>
        <span>prev: {prev}</span>
      </div>
    </>
  )
}

export default TestComponent2
