import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner.png'


const Banner  = (props) => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <img src={img} className=" rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="w-1/2 text-center">
            <h1 className="text-5xl sm-text-2xl font-bold">Incredible Trip</h1>
            <p className="py-6">
              What is travel in simple words? Travel is the movement of people
              between distant geographical locations. Travel can be done by
              foot, bicycle, automobile, train, boat, bus, airplane, ship or
              other means, with or without luggage, and can be one way or round
              trip.
            </p>
            <Link to='/'>
              <button className="btn btn-primary rounded">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Banner;