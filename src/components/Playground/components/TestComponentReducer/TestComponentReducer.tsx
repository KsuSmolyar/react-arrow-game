import { useEffect, useReducer } from "react"

type State = {
  count: number
}

type Action =
  | {
      type: "plus"
    }
  | {
      type: "minus"
    }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1,
      }
    case "minus":
      return {
        ...state,
        count: state.count - 1,
      }
    default: {
      return state
    }
  }
}

function TestComponentReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  })
  const { count } = state

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "plus" })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "minus" })}>DECREMENT</button>
    </>
  )
}

export default TestComponentReducer
