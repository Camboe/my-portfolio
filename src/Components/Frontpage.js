import './Frontpage.css';
import React from "react";
import Logo from '../Assert/Logo.png';

const Frontpage = () => {
    return (
        <div className="Page">
            <div className="logo">
            <img src={Logo} alt="Logo" />
            </div>
             </div>
    )
}

export default Frontpage;