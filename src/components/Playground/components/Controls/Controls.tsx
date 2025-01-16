import React from "react"
import { Button } from "../../../Ui"
import { PlayArrow, Pause } from "@mui/icons-material"
import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props
  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        className={styles.button}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
      >
        Play
      </Button>
      <Button
        endIcon={<Pause />}
        className={styles.button}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
