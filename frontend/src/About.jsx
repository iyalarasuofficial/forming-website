import React from 'react';
import "./about.css";
import {Footer} from "./Footer";
import img1 from "../src/components/aboutimages/img1.jpg";
import img2 from "../src/components/aboutimages/img2.jpg";
import img3 from "../src/components/aboutimages/img3.jpg";

export const About = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us </h1>
     
        <p>Welcome to Happy Hog Farms, where we specialize in raising healthy, happy pigs in a natural and humane<br/> environment. Our farm is dedicated to high-quality pork production with a focus on sustainability and animal welfare. </p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row d-flex justify-content-center flex-wrap about-container" >
        <div className="column ">
          <div className="card about-card">
            <img src={img1 }alt="susai" />
            <div className="container">
              <h2>Susainathan </h2>
              <p className="title">CEO & Founder</p>
              <p>"Susainathan  is a pioneering leader in livestock farming, specializing in pig, goat, and cow farming to provide high-quality meat and dairy products. "</p>
              <p>susaimm26@.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card about-card">
          <img src={img2}alt="ganaseelan" />
            <div className="container">
              <h2>Ganaseelan</h2>
              <p className="title">Managing Director</p>
              <p>"Ganaseelan brings exceptional leadership and strategic vision as the Managing Director, driving growth and innovation in our farming operations."</p>
              <p>ganaseelan@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card about-card">
          <img src={img3 }alt="parthipan" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>"Parthipan, as a Partner, brings a wealth of experience and dedication to our farming operations, collaborating closely to enhance productivity and sustainability.".</p>
              <p>parthipan@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
