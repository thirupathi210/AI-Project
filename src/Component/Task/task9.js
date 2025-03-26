import React,{useState,useEffect} from 'react'

const Task9 = () => {
    const[time,setTime]=useState(0);
    const[runing,setRuning]=useState(false);
    useEffect(()=>{
        let interval=null;
        if(runing){
            interval=setInterval(()=>{
                setTime(prevTime=>prevTime+10)
            },10)
        }
        else{
            clearInterval(interval)  
        }
        return ()=>clearInterval(interval)
    },[runing])
  return (
    <div>
      <h1>Stop Watch</h1>
      <span>{"0" + Math.floor((time/60000)%60)}:</span>
      <span>{"0" + Math.floor((time/1000)%60)}:</span>
      <span>{"0" + ((time/10)%100)}</span>

      <button onClick={()=>{setRuning(true)}}>start</button>
      <button onClick={()=>{setRuning(false)}}>stop</button>
      <button onClick={()=>{setTime(0)}}>reset</button>
    </div>
  )
}

export default Task9;
