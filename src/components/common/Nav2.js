import { NavLink } from "react-router-dom";
import "./Nav2.css";


function Nav2() {
    return (
    <nav>
      <header>
        
        <article>
          <h1>
            <NavLink to="/">
              This is Nav2 NavLink to "/"
              </NavLink>
          </h1>
        </article>
        <aside>
          <ul>

              <NavLink to="/about" >
                <li>About</li>
              </NavLink>
  
  
          </ul>
        </aside>
  
      </header>
      </nav>
    );
  }
  
  export default Nav2;
  