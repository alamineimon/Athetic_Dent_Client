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
          <div className=" text-center w-1/2">
            <h1 className="text-5xl sm-text-2xl font-bold">Athetic Dent</h1>
            <p className="py-6">
              Dentistry, also known as dental medicine and oral medicine, is the
              branch of medicine focused on the teeth, gums, and mouth. It
              consists of the study, diagnosis, prevention, management, and
              treatment of diseases, disorders, and conditions of the mouth,
              most commonly focused on dentition as well as the oral mucosa
            </p>
            <Link to="/">
              <button className="btn btn-primary rounded">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Banner;