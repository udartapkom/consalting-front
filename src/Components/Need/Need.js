import React from "react";
import DATA from "../../constants/Data";
import question from "../../Images/question.svg";

function Need(){
    return(
        <div className="Need">
            <div className="Need__container">
                <div className="Need__text">
                    <meta property="og:type" content="article"></meta>
                    <meta property="og:title" content={DATA.HOWSERVICES}></meta>
                    <meta property="article:author" content={DATA.KATANDEM} />
                    {DATA.NEEDTEXT}
                    </div>
                <img className="Need__question" src={question} align='right' alt='вопрос'></img>
            </div>
        </div>
    )
}
export default Need;