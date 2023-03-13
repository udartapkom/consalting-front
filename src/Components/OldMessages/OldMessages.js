import React from "react";

function OldMessages(props){
    const { oldCons, getOldConsultations } = props;

    React.useEffect(() => {
        getOldConsultations()
    }, [])

    return(
        <>
        {oldCons && oldCons.map((item, index) => (
                <ul  key={index} className={`NewMessages__list ${!item.isread && 'NewMessages__list_state_unread'}`}>
                    <li className="NewMessages__list-item">{item.name}</li>
                    <li className="NewMessages__list-item">{item.telephone}</li>
                    <li className="NewMessages__list-item">{item.date}</li>
                    <li className="NewMessages__list-item">{item.theme}</li>
                   {/*  <div className="NewMessages__buttons-container"> */}
                        {/* <p className="NewMessages__button" id={item._id}>{DATA.ISREAD}</p> */}
                       {/*  <p className="NewMessages__button" id={item._id} onClick={sendToArchive}>{DATA.TOARCHIVE}</p> */}
                  {/* </div >*/}
                </ul>
            ))}
        </>
    )
}
export default OldMessages;