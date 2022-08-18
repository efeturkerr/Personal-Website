import React from 'react'
import { FaHome } from "react-icons/fa"
import { RiMessage3Fill } from "react-icons/ri"

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-5">
      <div className="container">
        <a className="navbar-brand fs-2">Efe Türker</a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id='navbar'>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a href="/" className="nav-link fs-5 "><FaHome style={{marginBottom:"5px"}}/> Home</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link fs-5"><RiMessage3Fill style={{marginBottom:"5px"}} /> Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
