import React from "react"

const Nav = () => (
  <nav className='navbar navbar-dark bg-secondary navbar-expand-sm py-4' style={{backgroundColor:""}}>
    <div className='container'>
      <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#Navbar'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <a href='/' className='navbar-brand text-light font-weight-bold'>Movie Searcher</a>

      <div className='collapse navbar-collapse' id='Navbar'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a href='/' className='nav-link text-light'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='nav-link text-light'>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)


export default Nav
