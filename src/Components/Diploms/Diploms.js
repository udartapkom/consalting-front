import React from "react";
import attest from "../../Images/diploms/attest.jpeg";
import att from "../../Images/diploms/attest.jpg";
import cert from "../../Images/diploms/cert.jpg";
import audit from "../../Images/diploms/udit.jpg";

function Diploms(props){
    const{ handleCardClick } = props;
    
    function onDiplomClick(event){
       const link = event.target.src;
       const name= event.target.alt
        handleCardClick(link, name)
    }

    return(
        <section className="Diploms">
            <img className="Diploms__image" 
            src={attest} alt='Аттестат профессионального бухгалтера' 
            onClick={onDiplomClick}>
            </img>
            <img className="Diploms__image" 
            src={att} alt='Диплом о переподготовке' 
            onClick={onDiplomClick}>
           </img>
            <img className="Diploms__image" 
            src={cert} alt='Preparation and submission' 
            onClick={onDiplomClick}>
            </img>
            <img className="Diploms__image" 
            src={audit} alt='Сертификат "Практика налогообложения НДС"' 
            onClick={onDiplomClick}>
            </img>
        </section>
    )
}
export default Diploms;