import React from "react";
import '../assets/css/Header.css';
import Logo from '../assets/img/Claners.png';

export default function Header()
{
    return(
        <div className = "Header">
            <img src = {Logo} className="img" alt="Claners Logo"/>
        </div>
    )
}