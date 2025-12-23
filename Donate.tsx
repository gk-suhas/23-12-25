import React, { useState } from 'react'
import axios from 'axios'
function Donate() {
  const[data,setData]=useState({
    id:"",
    name:"",
    age:"",
    blood:""
  })
  function submit(e){
    e.preventDefault()
    axios.post("http://localhost:2000/info",data)
    .then(res=>console.log(res.data))
    .catch(err=>alert(err))
  }
 const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#abbbebff'
}

  const input={
    width:'250px',
    height:'30px',
    borderRadius:'30px',
    
  }
  const btn={
    width:'250px',
    height:'30px'
  }
  return (
    <>
    <form action="" onSubmit={submit} style={form}>
      <input 
          style={input}
          type="text" 
          name="id"
          value={data.id}
          placeholder='id'
          onChange={(e)=>setData({...data,id:e.target.value})}
      />
      <input 
          style={input}
          type="text" 
          name="name"
          value={data.name}
          placeholder='name'
          onChange={(e)=>setData({...data,name:e.target.value})}
      />
      
      <input 
          style={input}
          type="text"
          name="age"
          value={data.age}
          placeholder='age' 
          onChange={(e)=>setData({...data,age:e.target.value})}
      />
      <input 
          style={input}
          type="text"
          name="blood"
          value={data.blood}
          placeholder='blood group'
          onChange={(e)=>setData({...data,blood:e.target.value})} 
      />
      <button style={btn} type='submit'>submit</button>
    </form>

    </>
  )
}

export default Donate