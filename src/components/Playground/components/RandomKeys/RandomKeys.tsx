import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODE } from "../../constants"
import { IAppArrowCodes } from "../../types"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

export const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  console.log(state.steps)
  return (
    <div>
      {state.steps.map((item) => {
        return (
          <span key={item.step}>
            {MAP_ARROW_CODE[item.currentValue as keyof IAppArrowCodes]}
          </span>
        )
      })}
    </div>
  )
}

export default RandomKeys
