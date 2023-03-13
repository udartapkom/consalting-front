import React from "react";
//import { ScrollEffect } from 'react-easy-scroll-effect';
//import 'react-easy-scroll-effect/dist/index.css';
import { Helmet } from "react-helmet";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import Need from "../../Components/Need/Need";
import FormSign from "../../Components/FormSign/FormSign";
import Notepad from "../../Components/Notepad/Notepad";
import Feedback from "../../Components/Feedback/Feedback";
import Partners from "../../Components/Partners/Partners";
import Diploms from "../../Components/Diploms/Diploms";
import DATA from "../../constants/Data";
import INFO from "../../constants/Info";

function Main(props) {
    const { allArticles, feedbacks } = props;
    return (
        <>
        <Helmet>
        <title>{INFO.MAINTITLE}</title>
        <meta name="description" content={INFO.MAINDESCRIPTION}></meta>
        </Helmet>
            <section className="Main__cards" id='cards'>
                <Title
                    text={DATA.HOWSERVICES}
                />
                <div className="Main__cards-container">
                    {
                        allArticles.map((card, index) => (
                            <Card 
                                key={index}
                                card={card}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="Main__need">
                <Title
                    text={DATA.NEED}
                />
                <Need />
            </section>
            <FormSign {...props} />
            <Notepad />
            <Title
                text={DATA.DIPLOMS}
            />
            <Diploms {...props} />
            <section className="Main__feedbacks">
                <Title
                    text={DATA.CLIENTS}
                />
                <div className="Main__feedback-container">
                    {
                        feedbacks.sort(() => Math.random() - 0.5).slice(0, 3).map((card) => (
                            <Feedback
                                key={card._id}
                                card={card}
                            />

                        ))
                    }
                </div>
            </section>

            {/*             <ScrollEffect offset={100} duration={0.5} >  */}
            <section className="Main__partners">
                <Title
                    text={DATA.PARTNERSTITLE}
                />
                <Partners />
            </section>
            {/*              </ScrollEffect>  */}
        </>
    )
}
export default Main;