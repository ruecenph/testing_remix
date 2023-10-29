import React, { useRef } from 'react'

const TextInputWithButton = () => {

    const inputEl = useRef<HTMLInputElement>(null)

    const onButtonClick = () => {
        if (inputEl && inputEl.current) {
            inputEl.current.focus()
        }
    }

  return (
    <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}


export default TextInputWithButton