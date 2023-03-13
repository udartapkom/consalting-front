import React from "react";
import { Link } from 'react-router-dom';
import Contacts from "../Contacts/Contacts";
import lamp from "../../Images/lamp.svg";
//import humanPlus from "../../Images/human-plus.svg";
import contact from "../../Images/contact.svg";
import work from "../../Images/work.svg";
import ruble from "../../Images/ruble.svg";
import doublerightarrow from "../../Images/doublerightarrow.svg";
import DATA from "../../constants/Data";

function DesktopNavigation(props){
    const { allData, loggedIn, handleSignOut } = props;
    const [closeMenu, setCloseMenu] = React.useState(false);
    function setCloseSelector(event){
        setCloseMenu(true)
    }
    React.useEffect(() => {
        setCloseMenu(false)
    },[closeMenu])
    return (
        <>
            <nav className="DesktopNavigation">
                <ul className="DesktopNavigation__list">
                    <li className="DesktopNavigation__list-element">{DATA.SERVICES}
                        <img className="DesktopNavigation__svg" src={lamp} alt='Logo'></img>
                        <ul className="DesktopNavigation__top-menu">
                            {allData.map((item, index) => (
                                <li className="DesktopNavigation-top-menu__item" key={index}>{item.title}
                                    <img className="DesktopNavigation__arrow" src={doublerightarrow} alt="arrow"></img>
                                    <ul className="DesktopNavigation__submenu" tabIndex="1">
                                        {item.subtitle.map((task, index) => (
                                            <Link key={index}
                                            to={`more/${item._id}/${task.id}`}
                                                className={`DesktopNavigation-sub-menu__item 
                                                ${closeMenu === false 
                                                    ? 'DesktopNavigation__submenu-show' 
                                                    : 'DesktopNavigation__submenu-hidden'}`}
                                                tabIndex="1"
                                                onClick={setCloseSelector}>
                                                <li className="DesktopNavigation__link">
                                                    {task.text}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <Link className="DesktopNavigation__link-main-menu" to={'price'}>
                        <li className="DesktopNavigation__list-element">{DATA.PRICE}
                            <img className="DesktopNavigation__svg" src={ruble} alt='Logo'></img></li>
                    </Link>
                    {/*<Link className="DesktopNavigation__link-main-menu" to={'price'}>
                    <li className="DesktopNavigation__list-element">{DATA.CLIENT}
                        <img className="DesktopNavigation__svg" src={humanPlus} alt='Logo'></img></li>
                    </Link>
                     <Link className="DesktopNavigation__link-main-menu" to={'price'}>
                    <li className="DesktopNavigation__list-element">{DATA.CONTACTS}
                        <img className="DesktopNavigation__svg" src={contact} alt='Logo'></img></li>
                    </Link> */}
                    <Link className="DesktopNavigation__link-main-menu" to={'about'}>
                    <li className="DesktopNavigation__list-element">{DATA.ABOUTUS}
                        <img className="DesktopNavigation__svg" src={work} alt='Logo'></img></li>
                    </Link>
                    {loggedIn 
                    ? 
                    <Link className="DesktopNavigation__link-main-menu" to={'/'} onClick={handleSignOut}>
                    <li className="DesktopNavigation__list-element">{DATA.EXIT}
                    <img className="DesktopNavigation__svg" src={contact} alt='Logo'></img></li>
                    </Link>
                    :
                    <Link className="DesktopNavigation__link-main-menu" to={'login'}>
                    <li className="DesktopNavigation__list-element">{DATA.ADMIN}
                    <img className="DesktopNavigation__svg" src={contact} alt='Logo'></img></li>
                    </Link>
                }
                </ul>
                <Contacts />
            </nav>
        </>
    )
}
export default DesktopNavigation;