import React, { useState } from "react";
import "./signup.css";
import logo from './logo.png';
import { emailValidator, passwordValidator } from "./components/regexValidator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


function Signup() {
    const Navigate = useNavigate()
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
      const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        if (!emailValidator(formState.email))
            return setErrorMessage('Please enter a valid email address.');
        if (!passwordValidator(formState.password))
            return setErrorMessage('The password should contain a minimum of 8 characters, and at least one uppercase, one lowercase, one numeric, and one special character.');
        setLoading(true);
        axios.post(`https://forming-website-twwn.vercel.app/signup`, formState)
            .then(res => {
                setSuccessMessage('Signup successful!');
                setTimeout(() => {
                    setLoading(false);
                    Navigate("/login");
                    setFormState({ firstName: '', lastName: '', email: '', password: '' });

                }, 1500);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
                if(err.response && err.response.status===409){
                    setErrorMessage('Email already exists')
                }else{
                setErrorMessage('An error occurred during signup. Please try again.');
                }   
            });
    };

    return (
        <>
        {loading?(<div>
            <div className="loader-container" style={{ marginTop: "20%" }}>
                    <ClipLoader color={"orange"} size={150} />
                </div>
        </div>):( <section className="p-4 head-sec">
            <div className="card rounded-3">
                <div className="row">
                    <div className="col-12 col-md-6 mb-5">
                        <img src={logo} className="logo-signup " alt="logo" />
                        <p className="fw-bold fs-4">We Are The Team</p>
                        <form onSubmit={handleSubmit}  className="signup-form">
                            <input
                                type="text"
                                className="input-style mt-3 mx-3"
                                placeholder="First Name"
                                name="firstName"
                                value={formState.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="input-style mt-3 mx-3"
                                placeholder="Last Name"
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="input-style-1 input-style mt-3"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-style-1 input-style mt-3"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <button className="input-style mt-3 btn btn-primary signup input-style-1" type="submit">
                                Signup
                            </button>
                            {errorMessage && <p className="text-danger tex mt-3">{errorMessage}</p>}
                            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
                            <br />
                            <div>
                                <p className="mt-3">or signup with </p>
                              
                            </div>
                            <br />
                        </form>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center text-side">
                        <div>
                            <h4>We are more than just a company</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)}
        </>
       
    );
}

export default Signup;
