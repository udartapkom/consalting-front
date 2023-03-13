function ImagePopup(props) {
    const { isOpen, onClose, link, name, closeImagePopup } = props;
    return (
      <div
        className={` modal modal_look-photo ${
          isOpen ? "modal_open" : "modal_close"
        }`}
        onClick={closeImagePopup}
      >
        <div className="modal__content-zoom">
        <button type="button" className="popup__close" onClick={onClose}></button>
          <img className="modal__photo-zoom" src={link} alt={name}></img>
          <p className="modal__photo-signature">{name}</p>
        </div>
      </div>
    );
  }
  export default ImagePopup;