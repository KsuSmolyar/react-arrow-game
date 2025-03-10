import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Controls from "./components/Controls"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "./constants"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"
import styles from "./Playground.module.css"
// import TestComponent from "./components/TestComponent"
// import TestComponent2 from "./components/TestComponent2"
// import TestComponent3 from "./components/TestComponent3/TestComponent3"
// import TestComponentMemo from "./components/TestComponentMemo"
// import TestComponentReducer from "./components/TestComponentReducer/TestComponentReducer"
// import TestComponentUseLayout from "./components/TestComponentUseLayout/TestComponentUseLayout"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)
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

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnsuccessful && setIsSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
        {/* <TestComponent /> */}
        {/* <TestComponent2 /> */}
        {/* <TestComponent3 /> */}
        {/* <TestComponentMemo /> */}
        {/* <TestComponentReducer /> */}
        {/* <TestComponentUseLayout /> */}
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
