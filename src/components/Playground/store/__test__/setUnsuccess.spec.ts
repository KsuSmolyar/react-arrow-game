import playgroundReducer, {
  initialState,
  setUnsuccess,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("reducer setUnsuccess", () => {
  it("check setUnsuccess", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())
    const setUnsuccessState = playgroundReducer(setStepsState, setUnsuccess())

    expect(setStepsState.totalUnsuccessful).toBe(0)
    expect(setUnsuccessState.totalUnsuccessful).toBe(1)
    expect(setUnsuccessState.steps[0].success).toBe(false)
  })
})
