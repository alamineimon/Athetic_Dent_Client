import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = (props) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div className="grid gap-2 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    );
}

export default Services;