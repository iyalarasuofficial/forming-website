import React from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./components/curosilimages/image1.png";
import image2 from "./components/curosilimages/image2.png";
import image3 from "./components/curosilimages/image3.png";
import Carousel from 'react-bootstrap/Carousel';
import CardPage from "./CardPage";
import{ Footer }from "./Footer";
import { Link } from "react-router-dom";








function Homepage() {


    return (
        <div >
            <section className="curosil-style">
                <Carousel className="image">
                    <Carousel.Item>
                        <img className="d-block curosil-image" src={image2} alt="first slide" />
                        <Carousel.Caption>
                            <h3 className="cursor-text-animation " data-caption-animate="fadeInLeft" data-caption-delay="100">First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block curosil-image" src={image1} alt="first slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 curosil-image" src={image3} alt="first slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="card-style d-flex align-items-center">
                <div className="card-inner-text">
                    <h3>Farming time</h3>
                    <p>Welcome to our farm, home to a variety of livestock including cows, pigs, and goats. We are dedicated to sustainable and humane farming practices, ensuring the highest quality meat and dairy products. Experience the best of farm-fresh goodness with our range of offerings directly from our farm to your table.</p>
                    <button className="button-style"> <Link to={'/shop'}><FontAwesomeIcon icon={faArrowRight} /></Link></button>
                </div>
            </section>
            <section className="small-card-section w-100">
                <div>
                    <h2>WELCOME TO OUR FARM</h2>
                    <div className="row d-flex  justify-content-center">
                        <div className="col-sm-12 col-md-4 d-flex justify-content-around mb-3 small-cards flex-wrap ">

                            <CardPage />
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        
        </div>



    )
}
export default Homepage;