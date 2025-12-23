import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Check() {
    const[data,setData]=useState([])
    const[blood,setBlood]=useState("")
    console.log(blood);
    useEffect(()=>{
        axios.get("http://localhost:2000/info")
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>alert("error"))
    },[])
  
    let filteredData=data.filter(item=>item.blood.toLowerCase().includes(blood.toLowerCase()))

    let a={
        width:'200px',
        height:'30px',
        border:'3px solid blue',
        borderRadius:'10px',
        margin:'10px',
        justifyContent:'center',
        display:'flex',
        alignItems:'center',
        fontSize:'25px'
    }
    const b={
        display:'flex',
        gap:'150px',
        margin:'20px',
        padding:0,
        justifyContent:'space-evenly',
        border:'5px solid blue'

    }
    const input={
        width:'200px',
        height:'30px',
        border:'5px solid skyblue',
        borderRadius:'10px'
    }
  return (
    <>
   

    <input type="text"placeholder='blood group' onChange={(e)=>setBlood(e.target.value)} style={input}/>
    <div>
    <div style={b}>
    <h1>name</h1>
    <h1>age</h1>
    <h1>blood group</h1>
    </div>
        {filteredData.map(item=>(
            <div key={item.id} style={{display:'flex',gap:'30px'}}>
                <div style={a}>{item.name}</div>
                <div style={a}>{item.age}</div>
                <div style={a}>{item.blood}</div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Check