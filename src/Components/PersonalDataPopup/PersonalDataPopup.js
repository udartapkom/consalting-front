import React from "react";
import Popup from "../Popup/Popup";
import INFO from "../../constants/Info";

function PersonalDataPopup(props){
    const { isPersonalDataPopupOpen, onClosePopup } = props;
    return(
        <Popup
        title={INFO.PERSONALTITLE}
        isOpenPopup={isPersonalDataPopupOpen}
        onClosePopup={onClosePopup}
        submitText={INFO.BUTTONTEXT}
        mod='PersonalDataPopup'
        children={
            <p className="PersonalDataPopup__text"><noindex>{INFO.PERSONALDATA}</noindex></p>
        }
        />
    )
}
export default PersonalDataPopup;