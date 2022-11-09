import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = (props) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div className='py-8'>
        <div className="grid gap-2 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
        <div className='text-center'>
          <Link to='/services'>
            <p className="btn btn-primary rounded w-60">See All</p>
          </Link>
        </div>
      </div>
    );
}

export default Services;