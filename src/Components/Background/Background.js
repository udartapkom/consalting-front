import React from "react";
import ellipse from "../../Images/elipse.svg";
import diagramm from "../../Images/diagramm.svg";
import arrow from "../../Images/arrow.svg";

function Background(){
    return(
        <div className="Background">
            <img className="Background__elipse" src={ellipse} alt='elipse'></img>
            <img className="Background__diagramm" src={diagramm} alt='diagramm'></img>
            <img className="Background__arrow" src={arrow} alt='arrow'></img>
        </div>
    )
}
export default Background;