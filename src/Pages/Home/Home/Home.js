import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
}

export default Home;