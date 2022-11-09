import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Contexts/AuthPovider/AuthProvider";




const Register = (props) => {

    const { createUser,  updateUserProfile } =
    useContext(AuthContext);
  
  const { error, setError } = useState();


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const name = form.username.value;
    const password = form.password.value;
    const photo_url = form.photo_url.value;
    console.log(email, name, password, photo_url);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photo_url);
        setError("");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.log("error:", error);
      });
    // handleUserProfile
    const handleUpdateUserProfile = (name, photo_url) => {
      const profile = {
        displayName: name,
        photoURL: photo_url,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };
  };



    return (
      <div className="">
        <div className="flex my-10  justify-center">
          <div className=" w-[380px] p-8 space-y-3 rounded-xl dark:bg-gray-500 text-white">
            <h1 className="text-4xl font-bold text-center">Register</h1>
            <form
              onSubmit={handleSubmit}
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
                <label for="Email" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
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
                  name="photo_url"
                  id="photo_url"
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