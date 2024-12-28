import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODE } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

export const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props
  const keyPressedElement = useKeyPressedElement()

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key in MAP_ARROW_CODE && isTimerActive) {
        dispatch(setEnteredValue(event.key))
        console.log(event.key)
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })
  return (
    <div>
      <h3>keyPressed</h3>
      <span> {keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
