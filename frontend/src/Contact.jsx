import React, { useState } from 'react';
import "./contact.css";
import { Footer } from "./Footer";
import axios from "axios";
import Menu from "./Menu";



export const Contact = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const handleChange = (e) => {
        setFormState({
            ...formState, [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://forming-website-backend.onrender.com/contact`, formState)
            .then(res => {
                console.log("Registered successfully")
                setFormState({ firstName: '', lastName: '', email: '', phone: '', });
                setSuccessMessage('Successfully sent')
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            })
            .catch(err => console.log(err));

    };

    return (
        <>
         <Menu  />
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <section className="section section-xl bg-default text-md-left">
                <div className="container">
                    <div className="title-classic">
                        <h3 className="title-classic-title">Get in touch</h3>
                        <p className="title-classic-subtitle">
                            We are available 24/7 by fax, e-mail or by phone. You can also use our
                            <br className="d-none d-lg-block" />
                            quick contact form to ask a question about our products.
                        </p>
                    </div>

                    <form className="rd-form rd-mailform " onSubmit={handleSubmit}>
                        <div className="row row-20 row-md-30 justify-content-center">
                            <div className="col-lg-8">
                                <div className="row row-20 row-md-30">
                                    <div className="col-sm-6">
                                        <div className="form-wrap has-error">
                                            <input
                                                className="form-input form-control-has-validation form-control"
                                                id="contact-first-name-2"
                                                type="text"
                                                name="firstName"
                                                value={formState.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label rd-input-label" htmlFor="contact-first-name-2">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-wrap has-error">
                                            <input
                                                className="form-input form-control-has-validation form-control"
                                                id="contact-last-name-2"
                                                type="text"
                                                name="lastName"
                                                value={formState.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label rd-input-label" htmlFor="contact-last-name-2">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-wrap has-error">
                                            <input
                                                className="form-input form-control-has-validation form-control"
                                                id="contact-email-2"
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label rd-input-label" htmlFor="contact-email-2">E-mail</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-wrap has-error">
                                            <input
                                                className="form-input form-control-has-validation form-control"
                                                id="contact-phone-2"
                                                type="tel"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                required
                                                pattern="\d*"
                                                
                                            />

                                            <label className="form-label rd-input-label" htmlFor="contact-phone-2">Phone</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {successMessage && <p className='success-message'>{successMessage}</p>}
                        <button className="button button-lg button-primary button-zakaria btn btn-primary col-md-4 submite-btn col-12" type='submit'>Send Message </button>
                    </form>
                </div>
            </section>



            <section className="contact-sec section-xl bg-gray-4">
                <div className="container">
                    <div className="row row-30 justify-content-center">
                        <div className="col-sm-6 col-md-4">
                            <h4>Phones</h4>
                            <ul className="contacts-classic">
                                <li>Office <a href="tel:#">+1 (409) 987–5874</a></li>
                                <li>Fax <a href="tel:#">+1 (409) 987–5874</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <h4>Address</h4>
                            <div className="contacts-classic"><a href="#">523 Sylvan Ave, 5th Floor <br />Mountain View, CA 94041 USA</a></div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <h4>E-mails</h4>
                            <ul className="contacts-classic">
                                <li><a href="mailTo:#">info@demolink.org</a></li>
                                <li><a href="mailTo:#">mail@demolink.org</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />


           
        </>
    )
}
