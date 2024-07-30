import React, { useState } from "react";
import "./login.css";
import logo from "./logo.png";
import { emailValidator, passwordValidator } from "./components/regexValidator";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
    const Navigate = useNavigate()

    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }



    const onSubmitter = (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        if (!emailValidator(input.email))
            return setErrorMessage('Please enter valid email id ');
        axios.post(`http://localhost:8081/login`, input)
        .then(res=>{
            setTimeout(()=>{
                setSuccessMessage('Account Created');
            },5000)
            Navigate("/");           
           
        })
        .catch(err => setErrorMessage("Incorrect username or password"));     

    }



    return (
        <>
            <section className="p-4 text-center w-100 head-sec ">
                <div className="card rounded-3">
                    <div className="row ">
                        <div className="col-12 col-md-6 mb-5">
                            <img src={logo} className="logo " alt="logo"></img>
                            <p className="fw-bold fs-4"> We Are The Team</p>

                            <form >
                                <p>Please Login to your account</p>
                                <input placeholder="Username" className="input" type="text" name="email" onChange={handleChange} />
                                <br />
                                <input placeholder="Password" className="input" type="Password" name="password" onChange={handleChange} />
                                <br />
                                <p className="error-message">{errorMessage}</p>
                                <p className="success-message">{successMessage}</p>
                                <button className="btn btn-primary login input" type="submit " onClick={onSubmitter}> Login</button>
                                <br />
                                <p className="p-4" ><a className="text-muted " href="#!">Forgot password?</a></p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="p-2 mt-3"> Don't Have account?</p>
                                    <button className="btn btn-outline-danger " onClick={(e) => Navigate("/signup")} >Create New</button>
                                </div>


                            </form>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center text-background  ">
                            <div>
                                <h4> we are more than just a compnay</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div>

                </div>
            </section>




        </>


    );
}
export default Login;