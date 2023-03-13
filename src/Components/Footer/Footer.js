import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import telephone from "../../Images/telephone.svg";
import mail from "../../Images/mail.svg";
import telegram from "../../Images/telegram.png";
import whatsapp from "../../Images/whatsapp.png";
import doneAll from "../../Images/done_all.svg";
import DATA from "../../constants/Data";

function Footer(){
    return (
        <div className="Footer__container">
            <Logo
                footerLogoClass='Footer__logo Footer__logo-state_hidden'
            />
            <ul className="Header__list Header__list-state_hidden">
                <li className="Header__list-item Header__list-item_position_footer">
                    <img className="Header__done" src={doneAll} alt="done"></img>{DATA.PROF}</li>
                <li className="Header__list-item Header__list-item_position_footer">
                    <img className="Header__done" src={doneAll} alt="done"></img>{DATA.CONF}</li>
                <li className="Header__list-item Header__list-item_position_footer">
                    <img className="Header__done" src={doneAll} alt="done"></img>{DATA.OTV}</li>
            </ul>
            <div className="Footer__lists">
                <ul className="Footer__list">
                    <li className="Footer__list-item">
                        <img className="Footer__logos" src={telephone} alt='лого'></img>{DATA.TELEPHONE}</li>
                    <li className="Footer__list-item">
                        <a className="Footer__link" href={`mailto:${DATA.MAILTO}`}><img className="Footer__logos" src={mail} alt='лого'></img>{DATA.MAILTO}</a></li> 
                    <li className="Footer__list-item">
                        <a className="Footer__link" href={DATA.TELEGRAMLINK}><img className="Footer__logos" src={telegram} alt='лого'></img>{DATA.TELEGRAM}</a></li>
                    <li className="Footer__list-item">
                        <a className="Footer__link" href={DATA.WHATSAPPLINK}><img className="Footer__logos" src={whatsapp} alt='лого'></img>{DATA.WHATSAPP}</a> </li>
                </ul>
                <ul className="Footer__list">
                    <li className="Footer__list-item">
                    <Link className="Footer__link" to='cards' smooth={true} duration={1000} offset={-100}>{DATA.USSERVICES}</Link></li>
                    {/* <li className="Footer__list-item">{DATA.SIGNCLIENT}</li> */}
                    <li className="Footer__list-item">
                        <Link className="Footer__link" to='sign' smooth={true} duration={1000} offset={-50}>{DATA.QUESTION}</Link></li>
                        <NavLink className="Footer__link" to={'price'} preventScrollReset>
                            <li className="Footer__list-item">{DATA.PRICE}</li>
                        </NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Footer;