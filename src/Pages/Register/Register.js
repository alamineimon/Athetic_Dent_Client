import React from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
    return (
      <div className="">
        <div className="flex my-10  justify-center">
          <div className=" w-[380px] p-8 space-y-3 rounded-xl dark:bg-gray-500 text-white">
            <h1 className="text-4xl font-bold text-center">Register</h1>
            <form
              novalidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label for="username" className="block text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                                id="username"
                                required
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label for="Photo url" className="block text-white">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="photoUrl"
                                id="photoUrl"
                                required
                  placeholder="Your Photo Url"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label for="password" className="block text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                                id="password"
                                required
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                <div className="flex justify-end text-xs text-white">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
                Register
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Already have an account ?
              <Link to="/login">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="underline dark:text-gray-100"
                >
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Register;