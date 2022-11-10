import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateReview = (props) => {

  useEffect(() => {
    document.title = "UpdateReview";
  })

    const storedUser = useLoaderData();
    console.log(storedUser);
  const [user, setUser] = useState(storedUser);

  const handleUpdateReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const customername = storedUser.customerName;
    const mail = form.email.value;
    const msg = form.text.value;
    
    console.log(customername, mail, msg);

    setUser(msg);
    fetch(`http://localhost:5000/allreview/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Your review Updated");
          console.log(data);
        }
      });
  };


    return (
      <div className="flex my-10 justify-center">
        <div className="  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-500 text-white">
          <h1 className="text-4xl font-bold text-center">Update Your Review</h1>
            <form
            onSubmit={handleUpdateReview}
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
              <label for="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <textarea
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                name="text"
                id="text"
                cols="30"
                rows="10"
                placeholder="Please Input Your Feedback"
              ></textarea>
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
              Update
            </button>
          </form>
        </div>
      </div>
    );
}

export default UpdateReview;