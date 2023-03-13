import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Images/logo.png';

function Logo(props) {
    const { footerLogoClass } = props;
    return(
        <NavLink to="/">
        <img className={`Logo ${footerLogoClass}`} src={logo} alt='Логотип'></img> 
        </NavLink>
    )
}
export default Logo;