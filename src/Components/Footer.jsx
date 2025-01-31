import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-16 ">
            <div className="flex flex-wrap gap-44 justify-center">
             
                <div>
                    <img src={Logo} alt="Everest Momo Logo" className="mb-4" />
                    <p className="w-72 leading-loose">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis sint corrupti ratione laboriosam, 
                        debitis nam cumque commodi asperiores maxime officiis quis exercitationem quibusdam dignissimos placeat 
                        cupiditate magni eos quaerat distinctio!
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="leading-loose">
                    <h1 className="font-bold text-blue-600">Momos</h1>
                    <ul className="mt-5 space-y-2">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/service">Our Services</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div className="leading-loose">
                    <h1 className="font-bold text-blue-600">Legals</h1>
                    <ul className="mt-5 space-y-2">
                        <li><Link to="/">Terms & Conditions</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold text-green-700">Follow Us</h3>
                    <div className="flex gap-4">
                        <NavLink to="https://www.instagram.com/" target="_blank">
                            <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors">
                                <FaInstagram className="text-black" />
                            </div>
                        </NavLink>
                        <NavLink to="https://www.facebook.com/" target="_blank">
                            <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors">
                                <FaFacebookF className="text-black" />
                            </div>
                        </NavLink>
                        <NavLink to="https://www.twitter.com/" target="_blank">
                            <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors">
                                <FaTwitter className="text-black" />
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <NavLink to="https://www.youtube.com/" target="_blank">
                            <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors">
                                <FaYoutube className="text-black" />
                            </div>
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/" target="_blank">
                            <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors">
                                <FaLinkedin className="text-black" />
                            </div>
                        </NavLink>
                        <NavLink to="https://www.tiktok.com/" target="_blank">
                            <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors">
                                <FaTiktok className="text-black" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

       
            <hr className="w-3/4 mx-auto my-10" />
            <p className="text-center font-bold">
                Copyright © 2023 Everest Momo Pvt Ltd. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
