import * as React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container justify-content-center">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/chart'>Chart</Link>
                </li>
            </ul>
        </div>
      </div>
  </header>
)

export default Header