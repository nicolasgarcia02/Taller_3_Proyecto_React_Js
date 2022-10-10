import React from 'react';
import Nav from '../../components/nav/Nav';
import Banner from '../../components/banner/Banner';
import Descripcion from '../../components/descripcion/Descripcion';
import Feature from '../../components/feature/Feature';
import Location from '../../components/location/Location';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import './index.css';

function Index() {
    return (
        <div className="zzz">

            <Nav />
            <Banner textobanner='Hola este es el index y te presento todo nuestro index.' />
            <Descripcion />
            <Feature />
            <Location />
            <Cards />
            <Footer />

        </div>
    );
}

export default Index;
