import playgroundReducer, {
  initialState,
  setSteps,
  setCurrentStep,
} from "../slices"

describe("reducer setSteps", () => {
  it("check setSteps", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const firstStep = {
      step: 1,
      currentValue: setStepsState.steps[0].currentValue,
      enteredValue: null,
      success: null,
    }

    expect(initialState.steps.length).toBe(0)
    expect(setStepsState.steps.length).toBe(1)
    expect(setStepsState.steps[0]).toEqual(firstStep)
  })
})
