import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Check() {
    const {id}=useParams()
    const[data,setData]=useState({
        id:"",
        name:"",
        age:"",
        blood:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:2000/info/${id}`)
        .then(res=>setData(res.data))
    },[id])
    function update(e){
        e.preventDefault()
        axios.put(`http://localhost:2000/info/${id}`,data)
        .then(()=>alert("updated"))
    }
    function deleted(e){
        e.preventDefault()
        axios.delete(`http://localhost:2000/info/${id}`)
        .then(()=>alert("deleted"))
    }
  return (
    <>
    <form action="" onSubmit={update}>
        <input 
            type="text"
            name="id"
            value={data.id}
            onChange={(e)=>setData({...data,id:e.target.value})}
        />
        <input 
            type="text"
            name="name"
            value={data.name}
            onChange={(e)=>setData({...data,name:e.target.value})} 
        />
        <input 
            type="text" 
            name="age"
            value={data.age}
            onChange={(e)=>setData({...data,age:e.target.value})}
        />
        <input 
            type="text"
            name="blood"
            value={data.blood}
            onChange={(e)=>setData({...data,blood:e.target.value})} 
        />
        <button type='submit'>update</button>
        <button onClick={deleted}>delete</button>
    </form>
    </>
  )
}

export default Check