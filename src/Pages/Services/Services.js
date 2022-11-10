import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthPovider/AuthProvider';
import ServicesCard from './ServicesCard';

const Services = (props) => {
   const { loading, setUser } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  

  useEffect(() => {
      document.title='Services'
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => {
          if (loading) {
            return (
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-900"></div>
            );
          } else {
            setServices(data);
          }
        });
    }, [setServices,loading]);
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