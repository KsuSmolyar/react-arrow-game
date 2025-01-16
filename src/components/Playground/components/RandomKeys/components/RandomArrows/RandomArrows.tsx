import cn from "classnames"
import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODE } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IAppArrowCodes } from "../../../../types"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return cn(
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
      stylesCommon.icon,
    )
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((item) => {
        return (
          <span key={item.step} className={getStylesRandomKeys(item)}>
            {MAP_ARROW_CODE[item.currentValue as keyof IAppArrowCodes]}
          </span>
        )
      })}
    </div>
  )
}

export default RandomArrows
