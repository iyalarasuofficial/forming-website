import React from "react";
import "./signup.css";
import logo from './logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Signup() {
    return (

        <>
            <section className="p-4 head-sec ">
                <div className="card rounded-3">
                    <div className="row ">
                        <div className="col-12 col-md-6 mb-5">
                            <img src={logo} className="logo-signup" alt="logo"></img>
                            <p className="fw-bold fs-4"> We Are The Team</p>
                            <form>
                                <input type="text" className="input-style mt-3 mx-3" placeholder="First Name " />
                                <input type="text" className="input-style  mt-3 mx-3" placeholder="Last Name" />
                                <br />
                                <input type="text" placeholder="Email address" className="input-style-1 input-style mt-3" />
                                <br />
                                <input type="text" placeholder="Password" className="input-style-1 input-style mt-3 " />
                                <br />
                                <button className="input-style mt-3 btn btn-primary signup input-style-1">Signup</button>
                                <br />
                                <div>
                                <p className="mt-3">or signup with </p>
                              
                              
                                </div>
                                <br />
                            </form>


                        </div>
                        <div className="col-12 col-md-6 col-6 d-flex justify-content-center align-items-center text-side">
                            <div>
                                <h4> we are more than just a compnay</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





        </>

    )




}
export default Signup;