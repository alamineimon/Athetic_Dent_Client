import React, {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddService = (props) => {
  const [users, setUsers] = useState({});


    const handleSubmmitReview = (event) => {
      event.preventDefault();
      console.log(users);

      fetch("http://localhost:5000/addServices", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(users),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire("New service added successfully");
            event.target.reset();
          }
        });
    };
    { /* name price ratings describe  seller img */ }
    
    const handleOnBlur = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...users };
      newUser[field] = value;
      setUsers(newUser);
    };


  return (
    <div className="">
      <div className="flex my-10  justify-center">
        <div className=" w-2/3 p-8 space-y-3 rounded-xl dark:bg-gray-500 text-white">
          <h1 className="text-4xl font-bold text-center">Add Service</h1>

          <form
            onSubmit={handleSubmmitReview}
            novalidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            {/* name price ratings describe  seller img */}
            <div className="flex">
              <div className="mr-12  w-1/2">
                <div className="space-y-1 text-sm">
                  <label for="name" className="block text-white">
                    Name
                  </label>
                  <input
                    onBlur={handleOnBlur}
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="name"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 my-4 text-sm">
                  <label for="price" className="block  text-white">
                    Price
                  </label>
                  <input
                    onBlur={handleOnBlur}
                    type="price"
                    name="price"
                    id="price"
                    required
                    placeholder="price"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label for="ratings" className="block text-white">
                    Ratings
                  </label>
                  <input
                    onBlur={handleOnBlur}
                    type="ratings"
                    name="ratings"
                    id="ratings"
                    required
                    placeholder="ratings"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
              </div>
              <div className=" w-1/2">
                <div className="space-y-1 text-sm">
                  <label for="describe" className="block text-white">
                    Describe
                  </label>
                  <input
                    onBlur={handleOnBlur}
                    type="describe"
                    name="describe"
                    id="describe"
                    required
                    placeholder="describe"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 my-4 text-sm">
                  <label for="seller" className="block text-white">
                    Seller
                  </label>
                  <input
                    onBlur={handleOnBlur}
                    type="seller"
                    name="seller"
                    id="seller"
                    required
                    value={"AtheticDent"}
                    readOnly
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label for="img" className="block text-white">
                    Img
                  </label>
                  <input
                    required
                    onBlur={handleOnBlur}
                    type="img"
                    name="img"
                    id="img"
                    placeholder="img-url"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
              </div>
            </div>
            <button className="block w-3/5 mx-auto p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
