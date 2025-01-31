import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import AllergyAdvice from './Pages/AllergyAdvice';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import SignUp from './Pages/SignUp';
import Momo from './Pages/Momo';
import NavBar from './Components/NavBar';
import ProductDescription from './Pages/ProductDescription';
import Service from './Pages/Service';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Success from './Pages/Success';
import Failure from './Pages/Failure';
import Profile from './Pages/Profile';
import Protected from './Pages/Protected';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Momo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Protected Comp={Menu} />} />
        <Route path="/service" element={<Service />} />
        <Route path="/advice" element={<AllergyAdvice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Protected Comp={Cart} />} />
        <Route path="/payment" element={<Protected Comp={Payment} />} />
        <Route path="/success" element={<Protected Comp={Success} />} />
        <Route path="/failure" element={<Protected Comp={Failure} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productDescription/:id" element={<ProductDescription />} />
      </Routes>
    </div>
  );
};

export default App;
