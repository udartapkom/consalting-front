import React from "react";
import { Link } from "react-scroll";
import check from "../../Images/check.svg";
import DATA from "../../constants/Data";

function Partners(){
    return(
        <div className="Partners">
            <ul className="Partners__list">
                <li className="Partners__list-item"><img className="Partners__check" src={check} alt='чек'></img>{DATA.COFFEE}</li>
                <li className="Partners__list-item"><img className="Partners__check" src={check} alt='чек'></img>{DATA.HOSTEL}</li>
                <li className="Partners__list-item"><img className="Partners__check" src={check} alt='чек'></img>{DATA.PELICAN}</li>
                <li className="Partners__list-item"><img className="Partners__check" src={check} alt='чек'></img>{DATA.WILDMTS}</li>
            </ul>
            <Link className="Partners__button" to='sign' smooth={true} duration={1000} offset={-100} >{DATA.SIGNCLIENT}</Link>
        </div>
    )
}
export default Partners;