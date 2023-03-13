import React from "react";
import Form from "../Form/Form";
import DATA from "../../constants/Data";

function FormQuestion(props){
    const{ createConsultationHandle, PersonalDataPopupOpen } = props;
    const [clientName, setClientName] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [question, setQuestion] =React.useState('');
    
    function handleOnSubmit(event){
        event.preventDefault();
        createConsultationHandle(clientName, telephone, question)
        cleanForm()
    }
    function handleInputNameChange(event){
        setClientName(event.target.value)
    }
    function handleInputTelephoneChange(event){
        setTelephone(event.target.value)
    }
    function handleInputQuestionChange(event){
        setQuestion(event.target.value)
    }
    function cleanForm(){
        setClientName('')
        setTelephone('')
        setQuestion('')
    }
    return(
        <>
        <Form
            name='onQuestion'
            handleOnSubmit={handleOnSubmit}
            title={DATA.QUESTIONFORMTITLE}
            subtitle={DATA.SUBTITLESIGNFORM}
            text={DATA.TEXTFORM}
            link={DATA.CONFIRMFORM}
            buttonText={DATA.QUESTIONFORMSUBMIT}
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
            className="FormQuestion__input"
            placeholder="Имя"
            onInput={handleInputNameChange}
            value={clientName}
        />
        <input 
            id='telephone'
            type='text'
            name='inputTelephone'
            required
            minLength='5'
            maxLength='15'
            className="FormQuestion__input"
            placeholder="Телефон"
            onInput={handleInputTelephoneChange}
            value={telephone}
        />
        <textarea
            id='question'
            type='text'
            name='inputQuestion'
            required
            minLength='5'
            maxLength='600'
            className="FormQuestion__text-input"
            placeholder="Задайте вопрос здесь"
            onInput={handleInputQuestionChange}
            value={question}
        />
        </div>
        </Form>
        </>
    )
}
export default FormQuestion;