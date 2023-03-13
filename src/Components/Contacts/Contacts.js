import React from "react";
import telephone from "../../Images/telephone.svg";
import mail from "../../Images/mail.svg";
import DATA from "../../constants/Data";
function Contacts(){
    return(
        <address className="Contacts">
            <div className="Contacts__text">
                <img className="Contacts__logo" src={telephone} alt='telephone'></img>
                {DATA.TELEPHONE}
                </div>
            <a className="Contacts__text" href={`mailto:${DATA.MAILTO}`}>
                <img className="Contacts__logo" src={mail} alt='email'></img>
                {DATA.MAILTO}
                </a>
        </address>
    )
}
export default Contacts;