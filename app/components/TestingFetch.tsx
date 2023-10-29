import React, { useEffect, useState } from 'react'

interface IUser {
    userId: number
    id: number
    title : string
    completed : boolean
}

const TestingFetch = () => {

    const [result, setResult] = useState<IUser[]>([])

    useEffect(() => {

            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => res.json())
                .then((data) => setResult(data))

            
    },[])
    

  return (
    <>
    <div>TestingFetch</div>
    {
        result && 
        result.map((item) => {
            return (<p key={item.id}>{item.title}</p>)
        })
    }
    </>
  )
}

export default TestingFetch