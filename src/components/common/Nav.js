import React from 'react'
import './styles.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Nav() {

  
  return (
    <nav className="nav">


     <Link to="/" className="site-title">What's the Weather?</Link>
     <ul>
      <li>
        <CustomLink to="/about">About</CustomLink>
      </li>
      <li>
        <CustomLink to="/tbd">TBD</CustomLink>
      </li>
     </ul>

    </nav>
  )
}

//add customLink to make sure that the path ends match
//we are doing this AFTER the Nav function.

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}

export default Nav  


    //  {/* <routes>
    //   <route element>
    //  </routes> */}