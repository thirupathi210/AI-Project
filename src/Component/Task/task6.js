import React,{useState} from 'react'

const Task6 = () => {
    const [color,setColor]=useState("red")
  return (
    <div>
      <h1>color change: {color}</h1>
<button onClick={()=>setColor('blue')}>blue</button>
<button onClick={()=>setColor('red')}>red</button>
<button onClick={()=>setColor('green')}>green</button>
<button onClick={()=>setColor('yellow')}>yellow</button>
    </div>
  )
}

export default Task6;
