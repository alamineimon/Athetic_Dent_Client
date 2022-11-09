import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/AuthPovider/AuthProvider';
import MyReviewRow from './MyRevieRow/MyReviewRow';

const MyReview = (props) => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/allreview?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setReview(data));
    }, [user?.email]);

    const handleDelete = id => {
        const proced = window.confirm("Are You are sure?");
        if (proced) {
            fetch(`http://localhost:5000/allreview/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire("Review deleted successfully");
                        const remainning = review.filter(rew => rew._id !== id);
                        setReview(remainning)
                    }
                })
        }
    }
    return (
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
    );
}

export default MyReview;