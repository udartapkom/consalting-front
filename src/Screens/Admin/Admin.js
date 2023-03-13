import React, { useState, useCallback } from "react";
import NewMessages from "../../Components/NewMessages/NewMessages";
import OldMessages from "../../Components/OldMessages/OldMessages";
import EditPrice from "../../Components/EditPrice/EditPrice";
import DATA from "../../constants/Data";

function Admin(props){
    const { 
        newCons,
        oldCons,
        toArchive,
        allPrice,
        getNewConsultations,
        getOldConsultations,
        getAllPrice,
        createPrice,
        getOneElementOfPrice,
        oneElementPrice,
        delOneElementOfPrice
    } = props;

    const [activeComponent, setActiveComponent] = useState('newMessage');
    const modifyActiveComponent = useCallback(
      newActiveComponent => {
        setActiveComponent(newActiveComponent);
      },
      [setActiveComponent]
    );
 
    return(
        <section className="Admin">
             <ul className='Admin__menu'>
                <li className={`Admin__menu-link ${activeComponent === 'newMessage' && 'Admin__menu-link_state_active'}`} onClick={() => modifyActiveComponent('newMessage')}>{DATA.NEWMESSAGE}</li>
                <li className={`Admin__menu-link ${activeComponent === 'oldMessages' && 'Admin__menu-link_state_active'}`} onClick={() => modifyActiveComponent('oldMessages')}>{DATA.OLDMESSAGE}</li>
                <li className={`Admin__menu-link ${activeComponent === 'editPrice' && 'Admin__menu-link_state_active'}`} onClick={() => modifyActiveComponent('editPrice')}>{DATA.EDITPRICE}</li>
                <li className='Admin__menu-link' onClick={() => modifyActiveComponent('materials')}>{DATA.MATERIALS}</li>
        </ul>
        <div className="Admin__components">
        {activeComponent === 'newMessage' && <NewMessages 
                    newCons={newCons} 
                    getNewConsultations={getNewConsultations} 
                    toArchive={toArchive}
        />}
        {activeComponent === 'oldMessages' && <OldMessages 
                    oldCons={oldCons}
                    getOldConsultations={getOldConsultations}
        />}
        {activeComponent === 'editPrice' && <EditPrice
                    allPrice={allPrice}
                    getAllPrice={getAllPrice}
                    createPrice={createPrice}
                    getOneElementOfPrice={getOneElementOfPrice}
                    oneElementPrice={oneElementPrice}
                    delOneElementOfPrice={delOneElementOfPrice}
        />}
         {/*  {activeComponent === 'catalog' && <EditCatalog {...props} />}
          {activeComponent === 'addProduct' && <AddProduct {...props} />}
          {activeComponent === 'properties' && <Properties {...props} />} */}
        </div>
            {/* <h2 className="Admin__title">{DATA.NOTREADMESSAGE}</h2>
        {newCons && newCons.map((item) => (
            <ul className="Admin__list">
                <li className="Admin__list-item">{item.name}</li>
                <li className="Admin__list-item">{item.telephone}</li>
                <li className="Admin__list-item">{item.theme}</li>
                <li className="Admin__list-item">{item.isread}</li>
            </ul>
        ))} */}
       </section>
    )
}
export default Admin;