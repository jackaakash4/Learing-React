import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

   useEffect(() => {
    document.title = `You clicked ${count} times`
   })
    
  return (
    <div>
        <button onClick={()=>setCount(prevCount=> prevCount + 1)}>Click {count} </button>
    </div>

  )
}

export default HookCounterOne