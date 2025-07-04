import React from 'react';
import { Link } from 'react-router-dom';
import EatslyLogo from '../assets/Loggo.png'; // დარწმუნდით, რომ გზა სწორია
import AddressLogo from '../assets/address.png'; // დარწმუნდით, რომ გზა სწორია


{/*  */}
{/* web გვერდის ზედა მხარე . დავამატე ლოგო , home page , about  და adress, რომელიც არის უბრალო ფოტო და არ აქვს ფუნქცია */}
{/*  */}


function Header() {
    return (
        <header className="site-header">
            <Link to="/" className="logo-link">
                <img src={EatslyLogo} alt="Eatsly Logo" className="site-logo" />
            </Link>
            <button className="home-button" onClick={() => window.location.href = '/'}>
                Home
            </button>
            <button className="home-button" onClick={() => window.location.href = '/about'}>
                About
            </button>
            <div className="header-tagline">
                Get Your Crave, Without the Wait
            </div>
            <div className="address-fkbutton">
                <img src={AddressLogo} alt="Address" className="address-logo" />
            </div>
        </header>
    );
}


export default Header;