import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthPovider/AuthProvider';

const Header = () => {


  const { user, logOut, setUser } = useContext(AuthContext)
  const handelLogOut = () => {
    logOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => console.error(error));
  };

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
            <div className="flex">
              <img
                src="https://st2.depositphotos.com/1768926/9860/v/600/depositphotos_98600482-stock-illustration-dental-care-logo.jpg"
                alt=""
                className="h-20"
              />
              <p className="text-4xl mt-4 font-semibold">Athetic Dent</p>
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
            <Link to="/services">
              <li tabIndex={0}>
                <a>Services</a>
              </li>
            </Link>
            {user?.uid ? (
              <>
                <li className="mr-2 ">
                  <Link to="/myreview">My review</Link>
                </li>
                <li>
                  <Link to='/addservice'>Add Service</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            <Link to="/blogs">
              <li tabIndex={0}>
                <a>Blogs</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.uid ? (
            <Link to="/login">
              <button
                onClick={handelLogOut}
                className="btn btn-info mr-4 rounded text-white"
              >
                Logout
              </button>
            </Link>
          ) : (
            <div>
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
          )}
        </div>
      </div>
    );
}

export default Header;