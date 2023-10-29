import React, { useMemo, useState } from 'react'

const ExpensiveCalculation = (num: number) : number => {

    for(let i = 0; i < 10000000; i++) {
        num += 1;
    }

    return num

}

const TestingMemo = () => {

    const [count, setCount] = useState<number>(0)

    const calculation = useMemo(() => ExpensiveCalculation(count), [count])

    const increment = () => {
        setCount((c) => c + 1)
    }


  return (
    <>
    <div>TestingMemo {calculation}</div>
    <button onClick={increment}>addddddd</button>
    </>
  )
}

export default TestingMemo