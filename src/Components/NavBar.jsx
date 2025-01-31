import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Momo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { cartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth0(); 
  const { state } = useContext(cartContext);
  const totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="flex justify-around">
     
      <div className="mt-5 text-2xl">
        <NavLink to="/" className="flex items-center gap-x-5">
          <img src={Momo} alt="Company Logo" />
        </NavLink>
      </div>

   
      <div className="flex items-center gap-x-6 text-slate-600 text-xl">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/service">Our Services</NavLink>
        <NavLink to="/advice">Allergy Advice</NavLink>
        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="text-slate-600"
          >
            LogOut
          </button>
        ) : (
          <div className="space-x-3">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
        )}
        <NavLink to="/cart" className="relative">
          <FiShoppingCart size={40} />
          <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalQty}
          </span>
        </NavLink>
      </div>

   
      <div className="flex items-center gap-x-6">
        <NavLink to="https://www.facebook.com" target="_blank">
          <FaFacebook
            color="grey"
            size={52}
            className="p-1 bg-slate-200 rounded-full"
          />
        </NavLink>
        <NavLink to="https://www.tiktok.com" target="_blank">
          <FaTiktok
            color="grey"
            size={52}
            className="p-1 bg-slate-200 rounded-full"
          />
        </NavLink>
        <NavLink to="https://www.instagram.com" target="_blank">
          <FaSquareInstagram
            color="grey"
            size={52}
            className="p-1 bg-slate-200 rounded-full"
          />
        </NavLink>
        <NavLink
          className="bg-orange-600 rounded-3xl flex items-center justify-center h-12 w-32 text-white"
          to="/contact"
        >
          Contact Us
        </NavLink>
        {isAuthenticated ? (
          <NavLink
            className="border-2 rounded-full text-2xl flex items-center justify-center"
            to="/profile"
          >
            <img
              src={user.picture}
              alt={`${user.name}'s Profile`}
              className="rounded-full h-10 w-10"
            />
          </NavLink>
        ) : (
          <div>
            <CgProfile color="red" size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
