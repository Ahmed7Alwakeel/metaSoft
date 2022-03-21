import React from 'react'
import { NavLink } from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#"><img src={require('./favicon.png')} className="nav__img" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item dropdown ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
                <ul className="dropdown-menu ms-2" aria-labelledby="navbarDropdown">
                  <li><NavLink className="nav-link active fw-bold text-light" aria-current="page" to="#">Home</NavLink></li>
                  <li><NavLink className="nav-link active fw-bold text-light" aria-current="page" to="#">Home</NavLink></li>
                  <li><hr className="dropdown-divider" />
                  </li>
                  <li><NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink></li>
                </ul>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link active fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link  fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="nav-link  fw-bolder text-light" aria-current="page" to="#">Home</NavLink>
              </li>
            </ul>
            <form className='me-5'>
              <button className="btn btn-orangeV me-5 text-light fw-bold ">SIGN UP NOW!</button>
            </form>

          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar

