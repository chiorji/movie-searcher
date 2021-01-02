import React from "react"
import logo from '../img/themoviedb.svg'

const Nav = () => (
  <nav className='navbar navbar-dark navbar-expand-sm py-2 py-sm-4' style={{'backgroundColor':'#0d253f'}}>
    <div className='container'>
      <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#Navbar'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <a href='/' className='navbar-brand text-light font-weight-bold'>
        <img src={logo} alt='The Movie DB logo' height='30' width='30' />
        {''} Movie Searcher
      </a>

      <div className='collapse navbar-collapse' id='Navbar'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a href='https://github.com/chiorji/movie-searcher.git' className='nav-link text-light'>Project repo</a>
          </li>
          <li className='nav-item'>
            <a href='https://chigboguorji.netlify.app' className='nav-link text-light'>About me</a>
          </li>
          <li className='nav-item'>
            <a href='https://www.themoviedb.org/' className='nav-link text-light'>About moviedb</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)


export default Nav
