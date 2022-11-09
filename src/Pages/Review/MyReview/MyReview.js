import React, { useContext, useEffect, useState } from 'react';
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

    return (
      <div className="grid grid-rogrid gap-2 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3ws-2">
        {review.map((rev) => (
          <MyReviewRow key={rev._id} rev={rev}></MyReviewRow>
        ))}
      </div>
    );
}

export default MyReview;