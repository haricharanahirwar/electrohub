import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Auth from "../Authcomponent/Auth";

function Navbar() {
  const [NavbarContent, setNavbarContent] = useState();
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {
        setNavbarContent(<>{/* Top Banner */}
          <div className="bg-dark text-white py-2 d-flex justify-content-between align-items-center px-4">
            <p className="mb-0">Official Exchange Bonus & 4 More Benefits</p>
            <div>
             
              <Link to="/logout" className="btn btn-outline-light btn-sm me-2">Logout</Link>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold" to="/">ElectroHub</Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link" to="/">AdminHome</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/manageusers">Manageusers</Link></li>
                   <li className="nav-item"><Link className="nav-link" to="/addcategory">AddCategory</Link></li>

                </ul>

                <form className="d-flex me-3">
                  <input className="form-control me-2" type="search" placeholder="Search" />
                </form>

                <div className="d-flex">
                  <Link to="/profile" className="btn btn-outline-secondary me-2">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <Link to="/cart" className="btn btn-outline-secondary">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav></>)
      }
      else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {
        setNavbarContent(<>{/* Top Banner */}
          <div className="bg-dark text-white py-2 d-flex justify-content-between align-items-center px-4">
            <p className="mb-0">Official Exchange Bonus & 4 More Benefits</p>
            <div>
              
              <Link to="/logout" className="btn btn-outline-light btn-sm me-2">Logout</Link>
             
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold" to="/">ElectroHub</Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link" to="/">UserHome</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Category">Category</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Getbenefit">App Benefit</Link></li>
                </ul>

                <form className="d-flex me-3">
                  <input className="form-control me-2" type="search" placeholder="Search" />
                </form>

                <div className="d-flex">
                  <Link to="/profile" className="btn btn-outline-secondary me-2">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <Link to="/cart" className="btn btn-outline-secondary">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav></>)
      }
      else {
        setNavbarContent(<>{/* Top Banner */}
          <div className="bg-dark text-white py-2 d-flex justify-content-between align-items-center px-4">
            <p className="mb-0">Official Exchange Bonus & 4 More Benefits</p>
            <div>
             
              <Link to="/Register" className="btn btn-outline-light btn-sm me-2">Register</Link>
              <Link to="/login" className="btn btn-outline-light btn-sm">Login</Link>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold" to="/">ElectroHub</Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Category">Category</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Getbenefit">App Benefit</Link></li>
                </ul>

                <form className="d-flex me-3">
                  <input className="form-control me-2" type="search" placeholder="Search" />
                </form>

                <div className="d-flex">
                  <Link to="/profile" className="btn btn-outline-secondary me-2">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <Link to="/cart" className="btn btn-outline-secondary">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav></>)
      }
    },0)
  },[])

  return (
    <>
      {NavbarContent}
      {<Auth />}

    </>
  );
}

export default Navbar;
