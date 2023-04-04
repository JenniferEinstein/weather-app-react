// changing this back to what def worked, mirroring commit f6e8f72b

import React from 'react'
import './styles.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom'
// import Home from '../landing/Home';
// import About from './About';



function Nav() {

  // //add customLink to make sure that the path ends match
  // //we are doing this AFTER the Nav function.


  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
      return (
        <ul>
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    </ul>
      )}
  
  return (
     <>
    <nav className="nav">
     <Link to="/" className="site-title">
       What's the Weather?
     </Link>
      <ul>
       <li>
         <CustomLink to="/about">About</CustomLink>
       </li>
      </ul>
{/* //      <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/about" element={<About />} />
//     </Routes> */}
   </nav>
 </>
  )
}

 export default Nav  


