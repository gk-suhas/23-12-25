import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Data() {
  const [data, setData] = useState([])

  // Fetch all data
  useEffect(() => {
    axios.get("http://localhost:2000/info")
      .then(res => setData(res.data))
      .catch(err => alert(err))
  }, [])

  // Handle input changes
  function handleChange(e, itemId, field) {
    const newData = data.map(d =>
      d.id === itemId ? { ...d, [field]: e.target.value } : d
    )
    setData(newData)
  }

  // Delete a single item
  const handleDelete = (itemId) => {
    let a=prompt("enter password")
    if(a==="12345")
    {axios.delete(`http://localhost:2000/info/${itemId}`)
      .then(() => {
        // Remove from local state after successful deletion
        setData(data.filter(item => item.id !== itemId))
      })
      .catch(err => console.log(err))}
  }

  // Update a single item
  const handleUpdate = (item) => {
    let a=prompt("enter password")
    if(a==="12345")
    {axios.put(`http://localhost:2000/info/${item.id}`, item)
      .then(() => alert('Updated successfully'))
      .catch(err => console.log(err))}
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id} style={{ marginBottom: '20px', border: '1px solid gray', padding: '10px' }}>
          <input
            type="text"
            value={item.name}
            onChange={(e) => handleChange(e, item.id, 'name')}
            placeholder="Name"
          />
          <input
            type="text"
            value={item.age}
            onChange={(e) => handleChange(e, item.id, 'age')}
            placeholder="Age"
          />
          <input
            type="text"
            value={item.blood}
            onChange={(e) => handleChange(e, item.id, 'blood')}
            placeholder="Blood"
          />
          <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>Delete</button>
          <button onClick={() => handleUpdate(item)} style={{ marginLeft: '10px' }}>Update</button>
        </div>
      ))}
    </div>
  )
}

export default Data
