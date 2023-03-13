import React from "react";
import processor from "../../Images/processor.svg";
import bage from "../../Images/bage.svg";
import pig from "../../Images/pig.svg";
import graph from "../../Images/graph.svg";
import humanplus from "../../Images/humanplus.svg";
import telephonenote from "../../Images/telephonenote.svg";
 
import DATA from "../../constants/Data";

function Notepad(){
    return(
        <section className="Notepad">
            
            <div className="Notepad__background">
                <div className="Notepad__header"></div>
                <div className="Notepad__horizontal-container">
                        <h3 className="Notepad__title">{DATA.NOTEPADTITLE}</h3>
                    <div className="Notepad__horizont-line">
                        <img className="Notepad__logos" alt='лого' src={processor}></img>
                        <p className="Notepad__item">{DATA.COMPLEX}</p>
                    </div>
                    <div className="Notepad__horizont-line">
                        <img className="Notepad__logos" alt='лого' src={bage}></img>
                        <p className="Notepad__item">{DATA.QUALIF}</p>
                    </div>
                    <div className="Notepad__horizont-line">
                        <img className="Notepad__logos" alt='лого' src={pig}></img>
                        <p className="Notepad__item">{DATA.ECONOM}</p>
                    </div>
                    <div className="Notepad__horizont-line">
                        <img className="Notepad__logos" alt='лого' src={graph}></img>
                        <p className="Notepad__item">{DATA.OPACITY}</p>
                    </div>
                    <div className="Notepad__horizont-line">
                        <img className="Notepad__logos" alt='лого' src={humanplus}></img>
                        <p className="Notepad__item">{DATA.RESULT}</p>
                    </div>
                    <div className="Notepad__horizont-line">
                        <img className="Notepad__logos" alt='лого' src={telephonenote}></img>
                        <p className="Notepad__item">{DATA.CALLALL}</p>
                    </div>
                </div>
                <div className="Notepad__vertical-container">
                    <div className="Notepad__vertical-line"></div>
                    <div className="Notepad__vertical-line"></div>
                </div>

            </div>
        </section>
    )
}
export default Notepad;