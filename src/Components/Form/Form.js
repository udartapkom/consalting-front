import React from "react";

function Form(props) {
    const {
        name,
        handleOnSubmit, 
        title, 
        subtitle,
        text,
        link,
        buttonText,
        formClass,
        isValidForm,
        PersonalDataPopupOpen
     } = props;

    return(
        <section className="Form" id='sign'>
            <form
            className={formClass}
            noValidate
            name={name}
            action='post'
            onSubmit={handleOnSubmit}
            >
            <h2 className="Title">{title}</h2>
            <div className="Form__container">
                <div className="Form__background">
                    <h3 className="Form__subttitle"><noindex>{subtitle}</noindex></h3>
                    {props.children}
                    <p className="Form__text">
                        <noindex>{text}</noindex>
                        <a className="Form__link" onClick={PersonalDataPopupOpen}>{link}</a>
                        </p>                   
                </div>
                <button
                disabled={!isValidForm}
                className={`Form__button Form__button${isValidForm ? "_state_enable" : "_state_disable"}`}>{buttonText}</button>
            </div>
            </form>
        </section>
    )
}
export default Form;