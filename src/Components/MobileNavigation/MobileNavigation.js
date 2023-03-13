import React from "react";
import { Link } from "react-router-dom";
//import humanPlus from "../../Images/human-plus.svg";
import contact from "../../Images/contact.svg";
import work from "../../Images/work.svg";
import ruble from "../../Images/ruble.svg";
import DATA from "../../constants/Data";

function MobileNavigation(props) {
    const {
        allData,
        loggedIn,
    } = props
    const [isCheckboxCheck, setIsCheckboxCheck] = React.useState(false)
    const [touchPosition, setTouchPosition] = React.useState(null)
    function handleSignOut() {
        props.onSignOut();
    }
    const scroolToUp = (() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    function onButtonCheck() {
        !isCheckboxCheck ? setIsCheckboxCheck(true) : setIsCheckboxCheck(false)
    }
    const handleTouchMove = (event) => { //swipe вправо
        setTouchPosition(event.touches[0].clientX)
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }
        const currentTouch = event.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 10) {
            onButtonCheck()
        }
    }
    return (
        <nav className="MobileNavigation__hamburger-menu">

            <input id="menu__toggle" type="checkbox" checked={isCheckboxCheck} onClick={onButtonCheck}/>
            <label className="MobileNavigation__menu-btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <div className="MobileNavigation__box-shadow"></div>
            <ul className="MobileNavigation__menu-box" onTouchMove={handleTouchMove}>
                {allData.map((item, index) => (
                    <li className="MobileNavigation__list-title" key={index}>{item.title}
                        <ul className="MobileNavigation__list" onClick={scroolToUp}>
                            {item.subtitle.map((task, index) => (
                                <li className="MobileNavigation__list-item">
                                    <Link className="MobileNavigation__link" onClick={onButtonCheck}
                                        to={`more/${item._id}/${task.id}`}>{task.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                    <Link className="MobileNavigation__link" to={'price'} onClick={onButtonCheck}>
                    <div className="MobileNavigation__line"></div>
                        <li className="MobileNavigation__list-main-item">{DATA.PRICE}
                            <img className="DesktopNavigation__svg" src={ruble} alt='Logo'></img></li>
                    </Link>
                    {/* <Link className="MobileNavigation__link" to={'price'}>
                    <li className="MobileNavigation__list-main-item">{DATA.CLIENT}
                        <img className="DesktopNavigation__svg" src={humanPlus} alt='Logo'></img></li>
                    </Link> */}
                    <Link className="MobileNavigation__link" to={'about'} onClick={onButtonCheck}>
                    <li className="MobileNavigation__list-main-item">{DATA.ABOUTUS}
                        <img className="DesktopNavigation__svg" src={work} alt='Logo'></img></li>
                    </Link>
                    {loggedIn 
                    ? 
                    <Link className="MobileNavigation__link" to={'/'} onClick={handleSignOut}>
                    <li className="MobileNavigation__list-main-item">{DATA.EXIT}
                    <img className="DesktopNavigation__svg" src={contact} alt='Logo'></img></li>
                    </Link>
                    :
                    <Link className="MobileNavigation__link" to={'login'} onClick={onButtonCheck}>
                    <li className="MobileNavigation__list-main-item">{DATA.ADMIN}
                    <img className="DesktopNavigation__svg" src={contact} alt='Logo'></img></li>
                    </Link>
                    }
            </ul>
        </nav>
    )
}
export default MobileNavigation;