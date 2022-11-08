import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
      <div className="navbar bg-white px-8  text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Services</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className='flex'>
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Travel-logo-design-Graphics-9786083-1.jpg"
                alt=""
                className="h-20"
              />
              <p className="text-4xl mt-4 font-semibold">Incredible Trip</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/servces">
              <li tabIndex={0}>
                <a>Services</a>
              </li>
            </Link>

            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link to="/register">
            <button className="btn btn-info mr-4 rounded text-white">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline btn-info rounded hove:text-white ">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
}

export default Header;