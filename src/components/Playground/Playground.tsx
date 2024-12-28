import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Controls from "./components/Controls"
import { INTERVAL_TIME } from "./constants"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as ReturnType<typeof setInterval>)
    }

    return () => {
      clearInterval(refreshIntervalId.current as ReturnType<typeof setInterval>)
    }
  }, [isTimerActive, dispatch])
  return (
    <>
      <h1>Playground</h1>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
    </>
  )
}

export default Playground
