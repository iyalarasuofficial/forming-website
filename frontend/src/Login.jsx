import React, { useState, useEffect } from "react";
import "./login.css";
import logo from "./logo.png";
import { emailValidator, passwordValidator } from "./components/regexValidator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const onSubmitter = (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        if (!emailValidator(input.email)) {
            return setErrorMessage('Please enter valid email id');
        }
        setLoading(true);
        axios.post(`https://forming-website-oggy.vercel.app/login`, input)
            .then(res => {
                setSuccessMessage('Account Created');
                setTimeout(() => {
                    setLoading(false);
                    navigate("/homepage");
                }, 1500);
            })
            .catch(err => {
                setLoading(false);
                setErrorMessage("Incorrect username or password");
            });
    };

    return (
        <>
            {loading ? (
                <div className="loader-container" style={{ marginTop: "20%" }}>
                    <ClipLoader color={"orange"} size={150} />
                </div>
            ) : (
                <section className="p-4 text-center w-100 head-sec">
                    <div className="card rounded-3">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-5">
                                <img src={logo} className="logo" alt="logo" />
                                <p className="fw-bold fs-4">We Are The Team</p>
                                <form onSubmit={onSubmitter}>
                                    <p>Please Login to your account</p>
                                    <input placeholder="Email" className="input" type="text" name="email" onChange={handleChange} />
                                    <br />
                                    <input placeholder="Password" className="input" type="password" name="password" onChange={handleChange} />
                                    <br />
                                    <p className="error-message">{errorMessage}</p>
                                    <p className="success-message">{successMessage}</p>
                                    <button className="btn btn-primary login input" type="submit">Login</button>
                                    <br />
                                    <p className="p-4">
                                        <a className="text-muted" href="#!">Forgot password?</a>
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <p className="p-2 mt-3">Don't Have an account?</p>
                                        <button className="btn btn-outline-danger" onClick={() => navigate("/signup")}>Create New</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center text-background">
                                <div>
                                    <h4>We are more than just a farm</h4>
                                    <p>Our dedication to sustainable farming practices ensures the well-being of our pigs, cows, and goats. We strive to provide the best care and nutrition to our livestock, promoting healthy growth and productivity. Join us in our commitment to excellence in animal husbandry.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Login;
