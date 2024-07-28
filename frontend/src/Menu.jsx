import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";
import "./menu.css";


const Menu = ({ cart }) => {
    console.log(cart)
    return (
        <div class="transparent-hide">
            <nav>
                <img src={logo} />
                <input type='checkbox' id='check' />
                <label for="check">
                    <i><FontAwesomeIcon icon={faBars} id='btn' /></i>
                    <i><FontAwesomeIcon icon={faXmark} id='cancel' /></i>
                </label>
                <ul className="">
                    <li> <Link to={'/'} className="link-style">Home</Link></li>
                    <li>
                    <Link to={'/about'} className="link-style">About us</Link></li>
                    <li>
                    <Link to={'/gallery'} className="link-style">Gallery</Link></li>
                    <li>
                        <Link to={'/shop'} className="link-style">Shop</Link></li>
                        <li>
                        <Link to={'/contact'} className="link-style">Contact</Link></li>
                    <div className="button-sec">
                        <li className="button-style"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                        <li className="button-style ms-4 link-style"><Link to={"/cart"} className="link-style"><span className='cart-count'>{cart.length}</span><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                    </div>

                </ul>
            </nav>



            {/* <section className="w-100">

                <div className="background-container">
                    {<div className="row title-colour">
                        <div className="col-12">
                            <h1>Arockiya farms</h1>
                        </div>
                    </div>

                    <div className="row">
                        <nav className="col-12 col-md-8 home-menu ">
                            <ul className="d-flex flex-column flex-md-row justify-content-around  list ">
                                <li><img src={logo} className="logo-home" /></li>
                                <li> <Link to={'/'} className="link-style">Home</Link></li>
                                <li>About Us</li>
                                <li>Gallery</li>
                                <li>
                                    <Link to={'/shop'} className="link-style">Shop</Link></li>
                                <li>Contact Us</li>
                                <li className="button-sec">
                                    <li className="button-style"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                                    <li className="button-style ms-4 link-style"><Link to={"/cart"} className="link-style"><span className='cart-count'>{cart.length}</span><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                                </li>
                            </ul >
                        </nav>
                    </div>
                </div>
            </section>  */}
        </div>
    )
}

export default Menu