import {memo} from 'react'

const TestingMemo2 = () => {

    console.log("child render")

  return (
    <div>TestingMemo2</div>
  )
}

export default memo(TestingMemo2)
