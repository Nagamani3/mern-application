import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

const Navbar = () => {
  return (
    <section className="nav_section">
      <div
        className="text-animie
      "
      >
        
            <span>hey...welcome</span>
         
      </div>
      <article>
        <div>TREEberg</div>

        <ul>
          <Link to="/Signup">
            <li>Sign up</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </article>
    </section>
  );
}

export default Navbar