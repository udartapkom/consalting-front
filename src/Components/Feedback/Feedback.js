import React from "react";

function Feedback(props){
    const { title, text, image } = props.card;

    return(
        <div className="Feedback">
            <div className="Feedback__header">
                <img className="Feedback__image" src={image} alt='фото'></img>
{/*                 <h3 className="Feedback__title">{title}</h3> */}
            </div>
            <p className="Feedback__text">{text}</p>
        </div>
    )
}
export default Feedback;