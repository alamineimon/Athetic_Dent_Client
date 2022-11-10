import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthPovider/AuthProvider';



const TakeReview = () => {
    // const { user } = useContext(AuthProvider)
    const {user} = useContext(AuthContext)
  const { name, _id, seller, price, ratings, describe, img } = useLoaderData();

  useEffect(() => {
    document.title='Add Review'
  })

    const handleGiveReview =event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const customerName = form.name.value;
    const message = form.text.value;
    const photoURL = user?.photoURL;


        const review = {
          service: _id,
          serviceName: name,
          customerName,
          message,
          email,
        photoURL
        };

        fetch("https://incredible-trip-server.vercel.app/review", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire("Successfully added your  review");
              form.reset();
            }
          })
          .catch((err) => {
            console.error(err);
          });
  }

  return (
    <div>
      <div className="flex p-16 ">
        <div className="w-1/2">
          <div className="card w-96  bg-blue-100 shadow-xl">
            <figure>
              <img className="w-full h-72" src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold ">{name}</h2>
              <h1 className="text-3xl font-semibold ">Provider: {seller}</h1>
              <div className="flex">
                <p className="text-2xl text-orange-600">Price: {price}</p>
                <p className="text-2xl text-orange-600">Retings: {ratings}</p>
              </div>
              <p>{describe}</p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="text-4xl text-semibold text-center">Add Review</h1>
          <div>
            <form
              onSubmit={handleGiveReview}
              novalidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label for="name" className="block text-white">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label for="photoURL" className="block text-white">
                  photoURL
                </label>
                <input
                  defaultValue={user?.photoURL}
                  readOnly
                  type="photoURL"
                  name="photoURL"
                  id="photoURL"
                  required
                  placeholder="photoURL"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label for="email" className="block text-white">
                  email
                </label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              {user?.uid ? (
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
              ) : (
                <div className="rounded-md dark:border-gray-700 h-20 text-center my-12 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400">
                  <p>You can't enter any message</p>
                </div>
              )}
              {user?.uid ? (
                <button className="block w-full p-3 text-center btn  btn-info rounded text-white">
                  Give Review
                </button>
              ) : (
                <Link to="/login">
                  <div className='mt-6 mx-auto'>
                    <h1 className="btn   btn-info rounded text-white">
                      Please login before submit a review
                    </h1>
                  </div>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeReview;