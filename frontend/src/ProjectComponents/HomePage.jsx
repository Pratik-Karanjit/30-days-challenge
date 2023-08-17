import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  let navigate = useNavigate()
  return (
    <div>HomePage<br></br>
      <button onClick={() => navigate('/contact')} style={{cursor:'pointer'}}>Contact</button>
      <button onClick={() => navigate('/about')} style={{cursor:'pointer'}}>About Us</button>
    </div>
  )
}

export default HomePage