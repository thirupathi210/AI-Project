import React,{useState,useEffect} from 'react'

const Task2 = () => {
  const[count,setCount]=useState(0);
  const[change,setChange]=useState('');
  const[authercount,setAuthercount]=useState(5);
  const[time,setTime]=useState(0);
 useEffect(()=>{
   setInterval(()=>{
     setTime((prevTime)=>prevTime+1)
   },1000)
   
 },[])
 
 useEffect(()=>{
    document.title=`${authercount} new Message`
  },[authercount])
  return (
    <div>
      <h2>Counter:{count} new Massage!</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <h3>{authercount}</h3>
      <button onClick={()=>setAuthercount(authercount+5)}>aursid by 5</button>

      {/* live text */}
      <h2>{change}</h2>
      <input type='text' onChange={(e)=>setChange(e.target.value)}/>
      <h2>timer:{time}</h2>
    </div>
  )
}

export default Task2
