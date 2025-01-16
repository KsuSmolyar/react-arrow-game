import { memo, useCallback, useState } from "react"

function _A({ onClick }: { onClick: () => void }) {
  //   console.log("A")
  return (
    <button onClick={onClick} data-testid="button">
      click me
    </button>
  )
}

const A = memo(_A)

function TestComponent3() {
  //   console.log("App")
  const [state, setState] = useState(0)

  const handleClick = useCallback(() => {
    setState((state) => state + 1)
  }, [])

  //   const handleClick = () => {
  //     setState((state) => state + 1)
  //   }

  return (
    <div>
      {state}
      <A onClick={handleClick} />
    </div>
  )
}

export default TestComponent3
