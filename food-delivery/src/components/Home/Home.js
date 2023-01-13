import React from 'react';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";
import heroImg from "../../img/hero--img.svg";
import ServiceHome from './ServiceHome/ServiceHome';
import "./Home.css"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="home-content">
        <div className="home-left">
          <h1>Delivery Service</h1>
          <p>
            Now you can get your delivery as fast as possible through our
            services just by on clicking your favourite food and enjoy.
          </p>
          <button className="btn" onClick={()=>navigate("/order")}>
            order now
          </button>
        </div>
        <div className="home-right">
          <img src={heroImg} alt="person holding phone to order"/>
        </div>
      </div>
            <ServiceHome></ServiceHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;