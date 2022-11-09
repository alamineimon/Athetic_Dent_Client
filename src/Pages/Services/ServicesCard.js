import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const { name, _id, seller, price, ratings, describe, img } = service
    const describes = describe.slice(1, 260);

    return (
      <div className="card w-96  bg-blue-100 shadow-xl">
        <figure>
          <img className="w-full h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold ">{name}</h2>
          <h1 className="text-3xl font-semibold ">Provider: {seller}</h1>
          <p className="text-2xl text-orange-600">Price: {price}</p>
          <p>{describes}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary rounded">See More</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ServicesCard;