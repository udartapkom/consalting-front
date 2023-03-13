function Popup({isOpenPopup, title, onClosePopup, userEditor, image, mod, ...props}) {

    function handleOnSubmit(evt) {
      evt.preventDefault();
      onClosePopup()
    }
    return (
      <section className={`popup ${isOpenPopup &&  'popup_opened'}`} >
      <form action="post" name="popup__container" className={`popup__form ${mod}`} noValidate onSubmit={handleOnSubmit}>
        <button type="button" className="popup__close" onClick={onClosePopup}></button>
        {image && <img src={image} className="popup__image" alt="info"></img>}
        <h2 className="popup__title"><noindex>{title}</noindex></h2>
         {props.children}
        {props.submitText && <button className="popup__button">{props.submitText}</button>}
      </form>
    </section>
    )
  }
  export default Popup;