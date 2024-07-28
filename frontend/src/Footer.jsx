import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faPrint, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import Gallery from "./Gallery";



export const Footer = () => {
    return (
        <>

            <div class="my-5">
                <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
                    <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#418c9f' }}>
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faInstagram} /></a>
                                
          {/* <a href="#" className="text-white me-4">
            <FontAwesomeIcon icon={faLinkedin} />
          </a> */}
                             
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Arockiya</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><a href="#!" className="text-dark">MDBootstrap</a></p>
                                    <p><a href="#!" className="text-dark">MDWordPress</a></p>
                                    <p><a href="#!" className="text-dark">BrandFlow</a></p>
                                    <p><a href="#!" className="text-dark">Bootstrap Angular</a></p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><a href="#!" className="text-dark">Your Account</a></p>
                                    <p><a href="#!" className="text-dark">Become an Affiliate</a></p>
                                    <p><a href="#!" className="text-dark">Shipping Rates</a></p>
                                    <p><a href="#!" className="text-dark">Help</a></p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><FontAwesomeIcon icon={faHome} className="mr-3" /> New York, NY 10012, US</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" /> info@example.com</p>
                                    <p><FontAwesomeIcon icon={faPhone} className="mr-3" /> + 01 234 567 88</p>
                                    <p><FontAwesomeIcon icon={faPrint} className="mr-3" /> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <a className="text-dark" href="#">arockiya.com</a>
                    </div>
                </footer>



            </div>
            {/* <footer>
                <div className='row '>

                    <div className='d-flex gap-5 col-md-4 col-12 flex-column '>
                        <div><h5>About us</h5></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua psum dolor sit amet, consectetur adipisicing elit.</p></div>
                    </div>
                    <div className='d-flex gap-5 col-md-4 col-12 flex-column '>
                        <div><h5>Quick Links</h5></div>
                        <div>
                            <ol className='list-inline text-center'>
                                <li>Home</li>
                                <li>Gallery</li>
                                <li>Contact</li>
                                <li>shop</li>
                                <li>Cart</li>
                            </ol>
                        </div>

                    </div>
                    <div className='d-flex justify-content-around col-md-4 col-12 flex-column '>
                        <h5>GET IN TOUCH</h5>
                        <ul >
                            <li>
                                <div className='d-flex flex-row contact-detail'>
                                    <div>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className='ms-4'>
                                        <p className='address'>
                                            523 Sylvan Ave, 5th Floor<br />
                                            Mountain View, CA 94041 USA</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='d-flex flex-row contact-detail'>
                                    <div>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className='ms-4'>
                                        <p className='address'>
                                            +1 (844) 123 456 78</p>
                                    </div>
                                </div></li>
                            <li>
                                <div className='d-flex flex-row contact-detail'>
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className='ms-4'>
                                        <p className='address'>
                                            arockiya@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className='d-flex  contact-detail gap-5'>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faGoogle} /></li>
                        </ul>
                    </div>

                </div>
                <div className='footer-border' >
                    <div >
                        <p ><span>©&nbsp; </span><span class="copyright-year">2024</span><span>&nbsp;</span><span>Arokiya Farm</span><span>.&nbsp; All rights reserved.</span><span>&nbsp;</span><a href="privacy-policy.html">Privacy Policy</a><span>.</span></p>
                    </div>
                </div>

            </footer> */}

        </>
    )
}
