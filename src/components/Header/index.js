// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="head-cont">
    <div className="logo-cont">
      <img
        className="logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="head">Wave</h1>
    </div>

    <ul className="nav-item-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>

      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>

      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
