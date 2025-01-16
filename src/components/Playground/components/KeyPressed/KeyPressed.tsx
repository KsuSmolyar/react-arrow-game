import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODE } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../Ui"
import styles from "./KeyPressed.module.css"

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
      <TypographyHeader>Key pressed</TypographyHeader>
      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}> {keyPressedElement}</span>
        </div>
      </div>
    </div>
  )
}

export default KeyPressed
