import { Suspense, useMemo } from "react"

const resource = (() => {
  let data: any = null
  let status = "pending"
  let fetcher: any = null
  return {
    get() {
      if (status === "ready") {
        console.log("возврат data")
        return data
      }
      if (status === "pending") {
        fetcher = new Promise((resolve, reject) => {
          console.log("Promise start")
          setTimeout(() => {
            data = 1
            status = "ready"
            resolve(true)
          }, 5000)
        })
        status = "fetching"
      }

      console.log("status from resource.get:", status)
      throw fetcher
    },
  }
})()

function A() {
  console.log(1)
  const memoed = useMemo(() => {
    console.log(2)
    return "memo"
  }, [])

  const data = resource.get()
  console.log(3)
  return memoed + data
}

function TestComponentUseLayout() {
  return (
    <Suspense fallback={"null"}>
      <A />
    </Suspense>
  )
}

export default TestComponentUseLayout
