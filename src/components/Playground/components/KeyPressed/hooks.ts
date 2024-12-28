import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODE } from "../../constants"
import { IAppArrowCodes } from "../../types"

export const useKeyPressedElement = (): string => {
  const state = useAppSelector((state) => state.playground)

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue

    if (enteredValue) {
      return MAP_ARROW_CODE[enteredValue as keyof IAppArrowCodes]
    }
  }

  return "⌛️"
}
