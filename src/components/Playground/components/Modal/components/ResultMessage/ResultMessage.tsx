import { TypographyText } from "../../../../../Ui"
import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props
  return isSuccessEndGame ? (
    <TypographyText className={styles.text}>
      Congratulations! <br /> You win!
    </TypographyText>
  ) : (
    <TypographyText className={styles.text}>
      My regrets. <br /> You have lost this game
    </TypographyText>
  )
}

export default ResultMessage
