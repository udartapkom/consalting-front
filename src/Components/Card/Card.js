import React from "react";
import DATA from "../../constants/Data";

function Card(props) {
    const { title, text, image } = props.card;
    return (
        <div className="Card">
            <h3 className="Card__title">{title}</h3>
            <div className="Card__text-container">
                <img className="Card__image" align='left' src={image} alt='фото'></img>
                <div className="Card__text">
                    <meta property="og:type" content="article"></meta>
                    <meta property="og:title" content={title}></meta>
                    <meta property="article:author" content={DATA.KATANDEM} />
                    {text}
                </div>
            </div>
           {/*  <a className="Card__link" href='/more'>{DATA.MORE}</a> */}
        </div>
    )
}
export default Card;