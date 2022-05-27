import React, { useEffect, useState } from 'react'

const Toggle = () => {
    let [state,setState]=useState([])

    useEffect(() => {
        async function consume() {
            let data = await fetch(
              "https://jsonplaceholder.typicode.com/todos"
            );
            let mini =  await data.json()
            console.log(mini)
            setState(mini)
        }
        consume()
    },[])
   
  return (
      <div className='hey'>
          {state.map((x) => {
              return (
                  <div>
                      <p>{ x.id}</p>
                      <p>{x.title }</p>
                      <p>{x.userId }</p>
        </div>
    )
})}
      </div>
  )
}

export default Toggle