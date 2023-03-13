import React from "react";
import { Helmet } from "react-helmet";
import DATA from "../../constants/Data";
import INFO from "../../constants/Info";
function Price(props){
    const { allPrice, getAllPrice } = props;
    React.useEffect(() => {
        getAllPrice()
    }, [])
    return (
        <section className="Price">
            <Helmet>
                <title>{INFO.PRICETITLE}</title>
                <meta name="description" content={INFO.PRICEDESCRIPTION}></meta>
            </Helmet>
            <h2 className="Price__title">{DATA.PRICETITLE}</h2>
            {allPrice && allPrice.map((item, index) => (
                <div key={index} className="EditPrice__container">
                {item.titleShow && <h2 className="EditPrice__title">{item.title}</h2>}
                <div>{item.subtitle.map((el, index) => (
                    <div key={index}>
                        {el.textShow && <h3 className="EditPrice__subtitle">{el.text}</h3>}
                        <div>{el.service.map((cost, index) =>(
                            <div key={index} className="EditPrice__cost-container">
                                <p className="EditPrice__cost">{cost.name}</p>
                                <p className="EditPrice__cost">{cost.cost } &#8381;</p>
                            </div>
                        ))}</div>
                        </div>
                ))}</div>
                </div>
            ))}
        </section>
    )
}
export default Price;