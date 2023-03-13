import React from "react";
import { Helmet } from "react-helmet";
import ABOUTUS from "../../constants/AboutUs";
import accountant from "../../Images/photo/accountant.jpg";
import INFO from "../../constants/Info";
function AboutUs(){
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return(
        <section className="AboutUs">
            <Helmet>
                <title>{INFO.ABOUTUSTITLE}</title>
                <meta name="description" content={INFO.ABOUTUSDESCRIPTION}></meta>
            </Helmet>
            <div className="AboutUs__text"> <img className="AboutUs__img" src={accountant} alt={ABOUTUS.HEADER}></img>{ABOUTUS.HEADER}
            <ul className="AboutUs__list AboutUs__text">{ABOUTUS.PLUS}
                <li className="AboutUs__list-item AboutUs__text">{ABOUTUS.LIST1}</li>
                <li className="AboutUs__list-item AboutUs__text">{ABOUTUS.LIST2}</li>
                <li className="AboutUs__list-item AboutUs__text">{ABOUTUS.LIST3}</li>
                <li className="AboutUs__list-item AboutUs__text">{ABOUTUS.LIST4}</li>
            </ul>
            <p className="AboutUs__text">{ABOUTUS.FOOTER}</p>
            <div className="AboutUs__contacts">
            <p className="AboutUs__text">{ABOUTUS.ADDRESS}</p>
            <p className="AboutUs__text">{ABOUTUS.TELEPHONE}</p>
            <p className="AboutUs__text">{ABOUTUS.TEL1}</p>
            <p className="AboutUs__text">{ABOUTUS.TEL2}</p>
            </div>
            </div>
        </section>
    )
}
export default AboutUs;