import {Fragment} from "react";
import Hero from "../components/Hero/Hero.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Event from "../components/Event/Event.jsx";
import News from "../components/News/News.jsx";
import ServiceType from "../components/ServiceType/ServiceType.jsx";
import AlAds from "../components/AlAds/AlAds.jsx";
import OurLeaders from "../components/OurLeaders/OurLeaders.jsx";
import OurHeroes from "../components/OurHeros/OurHeroes.jsx";
import OurOrganizations from "../components/OurOrganizations/OurOrganizations.jsx";
import Multimedia from "../components/Multimedia/Multimedia.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Main = () => {

    return (
        <Fragment>
            <Hero/>
            <Cards/>
            <Event/>
            <News/>
            <ServiceType/>
            <AlAds/>
            <OurLeaders/>
            <OurHeroes/>
            <OurOrganizations/>
            <Multimedia/>
        </Fragment>
    );
};

export default Main;
