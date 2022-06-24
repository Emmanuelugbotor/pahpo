import React from 'react'
import "./customButton.css"
export default function CustomButton({ ...others}) {
  return (
    <button 
     className="custom"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarScroll"
    aria-controls="navbarScroll"
    aria-expanded="false"
    aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
  )
}
