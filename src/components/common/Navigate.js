import { NavLink } from "react-router-dom";
import "./Navigate.css";


function Navigate() {
    return (
    <nav>
      <header>
        
        <article>
          <h1>
            <NavLink to="/">
              This is Navigate NavLink to "/"
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
  
  export default Navigate;
  