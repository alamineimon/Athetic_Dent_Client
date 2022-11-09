import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthPovider/AuthProvider';

const AllReview = (props) => {
    const { user } = useContext(AuthContext);
    const { reviews, setReviews } = useState([]);
    console.log(reviews);

    // useEffect(() => {
    //   fetch("http://localhost:5000/allreview")
    //     .then((res) => res.json())
    //         .then((data) => console.log(data));
        
    // },[]);
    return (
        <div>
            {/* <h1>all review:{reviews.length} </h1> */}
        </div>
    );
}

export default AllReview;