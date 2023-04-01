import React from 'react'


function Nav() {
  return (
    <nav className="nav">
     {/* <routes>
      <route element>
     </routes> */}

     <a href="/" className="site-title">What's the Weather?</a>
     <ul>
      <li>
        <a href="/about">About</a>
      </li>
     </ul>

    </nav>
  )
}

export default Nav  