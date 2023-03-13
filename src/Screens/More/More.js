import React, { useEffect } from "react"
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';
import FormQuestion from "../../Components/FormQuestion/FormQuestion";
import telephone from "../../Images/telephone.svg";
import mail from "../../Images/mail.svg";
import telegram from "../../Images/telegram.png";
import whatsapp from "../../Images/whatsapp.png";
import DATA from "../../constants/Data";
import INFO from "../../constants/Info";

function More(props) {
    const { allArticles, getAllArticle } = props;
    const [isLoading, setLoading] = React.useState(true)
    useEffect(() => {
        getAllArticle()
        setLoading(false)
    }, []);
    let { id, key } = useParams();

    if (isLoading) {
        return (
            <div className="More__loader">
                <MutatingDots
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor='#4fa94d'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
                )
                        } else {
                            return (
                                <section className="More__section">
                                    <div className="More__menu-container">
                                        <h3 className="More__link-title">{DATA.ALLSERVICES}</h3>
                                        <ul className="More__menu">
                                            {allArticles.map((item, index) => (
                                                <li className="More__link-header" key={index}>
                                                    <h4 className="More__menu-link-title">{item.title}</h4>
                                                    <ul className="More__sub-menu" tabIndex="1">
                                                        {item.subtitle.map((task, index) => (
                                                            <Link className="More__link" key={index}
                                                                to={`/more/${item._id}/${task.id}`}>
                                                                <li className="More__link-container">
                                                                    {task.text}
                                                                </li>
                                                            </Link>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="More__container">
                                         <div className="More__links">
                                            <h3 className="More__link-title">{allArticles.length !== 0 ? allArticles.find(item => item._id === id)
                                                .subtitle.find(index => index.id == key).text : ''}</h3>
                                            <article className="More__article">
                                            <meta property="og:type" content="article"></meta>
                                            <meta property="og:title" content={allArticles.length !== 0 ? allArticles.find(item => item._id === id)
                                                .subtitle.find(index => index.id == key).text : ''}/>
                                                        <Helmet>
                                                            <title>{allArticles.length !== 0 ? allArticles.find(item => item._id === id)
                                                .subtitle.find(index => index.id == key).text : ''}</title>
                                                <meta name="description" content={allArticles.length !== 0 ? allArticles.find(item => item._id === id)
                                                .subtitle.find(index => index.id == key).description : ''} />
                                                        </Helmet>
                                            <meta property="article:author" content={DATA.KATANDEM}/>
                                            <meta property="article:tag" content={INFO.METATEMATIC}/>
                                                {allArticles.length !== 0 ? allArticles.find(item => item._id === id)
                                                    .subtitle.find(index => index.id == key).about : ''}
                                            </article>
                                        </div>
                                        <FormQuestion {...props}/>
                                    </div>
                                    <div className="More__more-links-container">
                                    <div className="More__good-link-container">
                                        <h4 className="More__menu-link-title">{DATA.GOODLINKS}</h4>
                                        <div className="More__good-links-container">
                                            <a className="More__link More__link_left-menu" target="blank" href="http://cbr.ru/">ЦБР</a>
                                            <a className="More__link More__link_left-menu" target="blank" href="https://minfin.gov.ru/">Минфин РФ</a>
                                            <a className="More__link More__link_left-menu" target="blank" href="http://kremlin.ru/">Президент России</a>
                                        </div>
                                    </div>
                                    <div className="More__contacts-container">
                                    <h4 className="More__menu-link-title">{DATA.CONTACTS}</h4>
                                    <ul className="More__list-contacts">
                                            <li className="More__list-item-contacts">
                                                <img className="Footer__logos" src={telephone} alt='лого'></img>{DATA.TELEPHONE}</li>
                                            <li className="More__list-item-contacts">
                                                <a className="More__link_contacts" href={`mailto:${DATA.MAILTO}`}><img className="Footer__logos" src={mail} alt='лого'></img>{DATA.MAILTO}</a></li>
                                            <li className="More__list-item-contacts">
                                                <a className="More__link_contacts" href={DATA.TELEGRAMLINK}><img className="Footer__logos" src={telegram} alt='лого'></img>{DATA.TELEGRAM}</a></li>
                                            <li className="More__list-item-contacts">
                                                <a className="More__link_contacts" href={DATA.WHATSAPPLINK}><img className="Footer__logos" src={whatsapp} alt='лого'></img>{DATA.WHATSAPP}</a> </li>
                                        </ul>
                                    </div>
                                    </div>
                                </section>
                            )
                        }
}
export default More;