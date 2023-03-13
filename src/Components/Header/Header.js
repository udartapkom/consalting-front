import React from "react";
import Logo from "../Logo/Logo";
import doneAll from "../../Images/done_all.svg"
import DATA from "../../constants/Data";

function Header() {
    return (
        <header className="Header">
            <div className="Header__wraper">
                <Logo />
                <div className="Header__container">
                    <h2 className="Header__title">{DATA.HEADERTITLE}</h2>
                    <div className="Header__line"></div>
                    <div className="Header__info">
                        <div className="Header__text-wrapper">
                            <p className="Header__text">{DATA.HEADERTEXT}</p>
                            <p className="Header__text">{DATA.HEADERTEXTLINETWO}</p>
                            <p className="Header__text">{DATA.HEADERTEXTLINETHREE}</p>
                        </div>
                        <ul className="Header__list">
                            <li className="Header__list-item"><img className="Header__done" src={doneAll} alt="done"></img>{DATA.PROF}</li>
                            <li className="Header__list-item"><img className="Header__done" src={doneAll} alt="done"></img>{DATA.CONF}</li>
                            <li className="Header__list-item"><img className="Header__done" src={doneAll} alt="done"></img>{DATA.OTV}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Header__line Header__line_position_left"></div>
        </header>
    )
}
export default Header;