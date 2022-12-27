import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="nav">
        <nav>
          <h1 className="nav-logo">DB</h1>
          <ul>
            <li><Link to={'/home'} >Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/'}>Languages</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar;