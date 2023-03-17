import React, { useState } from 'react'

function HookCounter2() {
    const initailCount = 0
    const [count, setCount] = useState(initailCount)
    return (
    <div>
        Count: {count} <br/>
        <button onClick={()=>setCount(initailCount)}>Reset</button> <br/>
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>incrementCount</button><br/>
        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button><br/>
    </div>
  )
}
export default HookCounter2
