import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../Ui"
import RandomArrows from "./components/RandomArrows"
import WelcomeText from "./components/WelcomeText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

export const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <TypographyHeader>RandomKeys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
