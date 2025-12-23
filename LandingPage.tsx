import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
function LandingPage() {
    let btn={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        gap:'30px'
    }
    let link={
        height:'100px',
        width:'300px',
        background:'lightblue',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textDecoration:'none',
        borderRadius:'10px'
    }
  return (
    <>
    <div style={btn}>
    <Link style={link} to="/donate">Donate Blood</Link>
    <Link style={link} to="/check">Need Blood</Link>
    </div>
    </>
  )
}

export default LandingPage