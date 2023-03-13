import React from "react";
import Form from "../Form/Form";
import DATA from "../../constants/Data";

function FormSign(props){

    const{ createConsultationHandle, PersonalDataPopupOpen } = props
    const [clientName, setClientName] = React.useState('')
    const [telephone, setTelephone] = React.useState('') 

    function handleOnSubmit(event){
        event.preventDefault();
        createConsultationHandle(clientName, telephone, DATA.WRITINGTOCONSULT)
        cleanForm()
    }
    function handleInputNameChange(event){
        setClientName(event.target.value)
    }
    function handleInputTelephoneChange(event){
        setTelephone(event.target.value)
    }
    
    function cleanForm(){
        setClientName('')
        setTelephone('')
    }

    return(
        <>
        <Form
            name='onSignUp'
            handleOnSubmit={handleOnSubmit}
            title={DATA.TITLESIGNFORM}
            subtitle={DATA.SUBTITLESIGNFORM}
            text={DATA.TEXTFORM}
            link={DATA.CONFIRMFORM}
            buttonText={DATA.BUTTONTEXTSIGN}
            PersonalDataPopupOpen={PersonalDataPopupOpen}
            isValidForm={true}
            >
                <div className="FormSign__inputs-container">
        <input 
            id='name'
            type='text'
            name='inputName'
            required
            minLength='2'
            maxLength='100'
            className="FormSign__input"
            placeholder="Имя"
            onChange={handleInputNameChange}
            value={clientName}
        />
        <input 
            id='telephone'
            type='text'
            name='inputTelephone'
            required
            minLength='5'
            maxLength='15'
            className="FormSign__input"
            placeholder="Телефон"
            onChange={handleInputTelephoneChange}
            value={telephone}
        />
        </div>
        </Form>
        </>
    )
}
export default FormSign;