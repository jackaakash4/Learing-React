import React, { useEffect, useState } from 'react'

function HookCounter2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('use-effect - updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>Clicked {count} times </button>
    </div>
  )
}

export default HookCounter2