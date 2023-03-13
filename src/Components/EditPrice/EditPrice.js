import React from "react";
import DATA from "../../constants/Data";
function EditPrice(props) {
    const {
        allPrice,
        getAllPrice,
        createPrice,
        getOneElementOfPrice,
        oneElementPrice,
        delOneElementOfPrice } = props;
    const [newPrice, setNewPrice] = React.useState({});
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
    const [name, setName] = React.useState('');
    const [cost, setCost] = React.useState('');
    const [checkTitle, setCheckTitle] = React.useState(false);
    const [checkSubTitle, setCheckSubTitle] = React.useState(false);

    function titleHandle(event, data) {
        setTitle(event.target.value)
    }
    function textHandle(event) {
        setText(event.target.value)
    }
    function nameHandle(event) {
        setName(event.target.value)
    }
    function costHandle(event) {
        setCost(event.target.value)
    }
    function checkTitleHandle() {
        if (checkTitle) {
            setCheckTitle(false)
        }
        else {
            setCheckTitle(true)
        }
    }
    function checkSubTitleHandle() {
        if (checkSubTitle) {
            setCheckSubTitle(false)
        }
        else {
            setCheckSubTitle(true)
        }
    }

    function priceBuild() {
        createPrice(newPrice)
    }
    React.useEffect(() => {
        getAllPrice()
    }, [])

    React.useEffect(() => {
        setNewPrice(
            {
                title: title,
                titleShow: checkTitle,
                subtitle: [
                    {
                        text: text,
                        textShow: checkSubTitle,
                        service: [
                            {
                                name: name,
                                cost: cost
                            }
                        ]
                    }
                ]
            }
        )
    }, [
        title,
        text,
        name,
        cost,
        checkSubTitle,
        checkTitle,
    ])

    function onDoubleClickHandle(event) {
        //getOneElementOfPrice(event.target.id)
        delOneElementOfPrice(event.target.id)
    }
    return (
        <section className="EditPrice">
            {allPrice && allPrice.map((item, index) => (
                <div key={index} className="EditPrice__container">
                    {item.titleShow && <h2 className="EditPrice__title">{item.title}</h2>}
                    <div>{item.subtitle.map((el, index) => (
                        <div key={index}>
                            {el.textShow && <h3 className="EditPrice__subtitle">{el.text}</h3>}
                            <div>{el.service.map((cost, index) => (
                                <div key={index} className="EditPrice__cost-container" id={item._id} onDoubleClick={onDoubleClickHandle}>
                                    <p className="EditPrice__cost" >{cost.name}</p>
                                    <p className="EditPrice__cost" >{cost.cost} &#8381;</p>
                                </div>
                            ))}</div>
                        </div>
                    ))}</div>
                </div>
            ))}
            <h3 className="EditPrice__form-title">{DATA.ADDOREDITPRICE}</h3>
            <div className="EditPrice__form-container">
                <div className="EditPrice__form">
                    <div className="EditPrice__input-container">
                        <span>{DATA.TITLE}</span>
                        <input className={`EditPrice__input ${!checkTitle && 'EditPrice__input-state-disabled'}`} onInput={titleHandle} ></input>
                        <span>{DATA.SHOWTITLE}</span>
                        <input className="EditPrice__checkbox" type="checkbox" onInput={checkTitleHandle}></input>
                    </div>
                    <div className="EditPrice__input-container">
                        <span>{DATA.TITLE}</span>
                        <input className={`EditPrice__input ${!checkSubTitle && 'EditPrice__input-state-disabled'}`} onInput={textHandle}></input>
                        <span>{DATA.SHOWSUBTITLE}</span>
                        <input className="EditPrice__checkbox" type="checkbox" onInput={checkSubTitleHandle}></input>
                    </div>
                    <div className="EditPrice__input-container">
                        <span>{DATA.SERV}</span>
                        <input className="EditPrice__input" onInput={nameHandle}></input>
                    </div>
                    <div className="EditPrice__input-container">
                        <span>{DATA.COST}</span>
                        <input className="EditPrice__input" onInput={costHandle}></input>
                    </div>
                    <p className="EditPrice__form-button" onClick={priceBuild}>{DATA.SAVE}</p>
                </div>
            </div>

        </section>
    )
}
export default EditPrice;