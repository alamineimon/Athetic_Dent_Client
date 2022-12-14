import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/AuthPovider/AuthProvider';
import MyReviewRow from './MyRevieRow/MyReviewRow';

const MyReview = (props) => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    document.title = 'My Review'
    fetch(
      `https://incredible-trip-server.vercel.app/allreview?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        // navigate(from, { replace: true });
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proced = window.confirm("Are You sure?");
    if (proced) {
      fetch(`https://incredible-trip-server.vercel.app/allreview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Successfully deleted");
            const remainning = review.filter((rew) => rew._id !== id);
            setReview(remainning);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <p className="text-2xl text-center">Total Review: {review.length}</p>
        <div className="grid grid-rogrid gap-2 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3ws-2">
          {review.map((rev) => (
            <MyReviewRow
              key={rev._id}
              rev={rev}
              handleDelete={handleDelete}
            ></MyReviewRow>
          ))}
        </div>
      </div>
      {review.length == 0 && (
        <div>
          <h1 className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md mb-36 text-center divide-gray-700 dark:bg-gray-800 dark:text-gray-100">
            No review  found
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyReview;