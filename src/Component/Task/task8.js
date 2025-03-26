import React,{useState,useEffect} from 'react'

const Task8 = () => {
  const[data,setData]=useState([]);

  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((json)=>setData(json))
  },[])
  return (
    <div className='text-center'>
      <h1>Posts</h1>
      <ul>
        {data.map((item)=>{
          return (
            <React.Fragment key={item.id}>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </React.Fragment>
          )
        })}
        <li></li>
      </ul>
    </div>
  )
}

export default Task8;
