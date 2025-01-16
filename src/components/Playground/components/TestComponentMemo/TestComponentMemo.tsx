import { memo, useMemo, useState } from "react"

function _B() {
  console.log("B")
  return null
}

const B = memo(_B)

function _A({ children }: { children: JSX.Element }) {
  console.log("A")
  return children
}

const A = memo(_A)

const TestComponentMemo = () => {
  const [count, setCount] = useState(0)

  //   const memoizedB = useMemo(() => <B />, [])
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>click me</button>
      {/* <A>{memoizedB}</A> */}
      <A>
        <B />
      </A>
    </div>
  )
}

export default TestComponentMemo
