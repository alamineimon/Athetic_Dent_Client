import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
}

export default Home;