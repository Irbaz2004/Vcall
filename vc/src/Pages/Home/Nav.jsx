import React from 'react'
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {


    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
      };
    
      useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
      }, [darkMode]);
    
  return (
    <>
    <div className="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <div class="col-md-3 mb-2 mb-md-0 logo">
    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
iRuzCallSapce
    </a>
  </div>

  <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
   <NavLink to={'/'}> <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li></NavLink>
    <li><a href="#" class="nav-link px-2">Blog</a></li>
    <li><a href="#" class="nav-link px-2">Pricing</a></li>
    <li><a href="#" class="nav-link px-2">FAQs</a></li>
    <li><a href="#" class="nav-link px-2">About</a></li>
  </ul>

  <div class="col-md-3 text-end">
  <button onClick={toggleTheme} className="theme-toggle-button contact-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
  </div>
</header>
    </div>
      
    </>
  )
}
