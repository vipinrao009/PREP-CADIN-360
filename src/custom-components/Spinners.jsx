import React from 'react'
import {PulseLoader } from "react-spinners"

const Spinner = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center h-full">
      <PulseLoader size={60} color='#D6482B'/>
    </div>
  )
}

export default Spinner
