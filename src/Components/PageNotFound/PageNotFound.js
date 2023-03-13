import React from "react";
import { Link } from "react-router-dom";
import DATA from "../../constants/Data";
function PageNotFound(){
    return(
        <section className="PageNotFound">
            <p className="PageNotFound__text">{DATA.OOPS}</p>
            <h2 className="PageNotFound__title">{DATA.FOURHUND}</h2>
            <Link className="PageNotFound__link" to="/">{DATA.BACK}</Link>
        </section>
    )
}
export default PageNotFound;