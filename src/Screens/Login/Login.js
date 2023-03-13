import React from 'react';
import Form from '../../Components/Form/Form';
import useFormWithValidation from '../../Components/Validation/Validation';
import DATA from '../../constants/Data';

function Login(props) {
    const { onSubmitLogin } = props;

    const {
      values,
      errors,
      isValidForm,
      handleInputChange,

    } = useFormWithValidation({})

      function handleOnSubmit(event) {
        event.preventDefault();
        onSubmitLogin(values);
      }
    return(
    <>
        <Form 
        name = 'login'
        formClass = 'Login__form'
        title = {DATA.LOOK}
        subtitle= {DATA.SUBTITLESIGNFORM}
        buttonText = 'Войти'
        modificator = 'Logo_type_form-register'
        isValidForm={isValidForm}
        handleOnSubmit={handleOnSubmit}
        >
          <div className='Login__inputs-container'>
            <div className='Login__input-container'>
            <label htmlFor="email" className="Login__label">E-mail</label>
            <div>
            <input
            id="email"
            type="email"
            className="Login__input"
            name='email'
            required
            minLength="5"
            maxLength="50"
            onChange={handleInputChange}
            />
            <label htmlFor="email" className="Login__label Login__label_type_error">{errors.email}</label>
            </div>
            </div>
            <div className='Login__input-container'>
            <label htmlFor="password" className="Login__label">Пароль</label>
            <div>
            <input
            id="password"
            type="password"
            className="Login__input"
            name='password'
            minLength="6"
            required
            onChange={handleInputChange}
            />
            <label htmlFor="password" className="Login__label Login__label_type_error">{errors.password}</label>
            </div>
            </div>
            </div>
        </Form>
    </>
    )
}
export default Login;