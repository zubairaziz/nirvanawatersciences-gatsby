import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <header>
    <div className="container">
      <div className="flex justify-between w-full">
        <p>Site Logo</p>
        <ul className="flex gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/water">The Water</Link>
          </li>
          <li>
            <Link to="/science">Science</Link>
          </li>
          <li>
            <button>Menu</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Navbar
