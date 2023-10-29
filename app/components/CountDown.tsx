import { forwardRef, useImperativeHandle } from "react"

export type CountdownHandle = {
    start : () => void
}

type CountdownProps = {}

const CountDown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {

    useImperativeHandle(ref, () => ({
        start() {
            alert("Start")
        }
    }))

  return (
    <div>CountDown</div>
  )
})

export default CountDown
