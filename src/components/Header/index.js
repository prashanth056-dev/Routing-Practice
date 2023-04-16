import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <div className="header">
      <img
        className="icon"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1>Wave</h1>
    </div>
    <ul className="options">
      <li>
        <Link className="links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="links" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="links" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
