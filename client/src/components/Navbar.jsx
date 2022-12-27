import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="App-header">
        <nav>
          <h1 className="nav-logo">DB</h1>
          <ul>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar;