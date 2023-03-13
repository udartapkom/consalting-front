import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import 'react-easy-scroll-effect/dist/index.css';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Main from '../../Screens/Main/Main';
import More from '../../Screens/More/More';
import Price from '../../Screens/Price/Price';
import Login from '../../Screens/Login/Login';
import AboutUs from '../../Screens/AboutUs/AboutUs';
import mainApi from '../../Utils/Api/mainApi';
import Navigation from '../Navigation/Navigation';
import Admin from '../../Screens/Admin/Admin';
import FindUs from '../FindUs/FindUs';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';
import ImagePopup from '../ImagePopup/ImagePopup';
import PersonalDataPopup from '../PersonalDataPopup/PersonalDataPopup';
import success from '../../Images/success.svg';
import fail from '../../Images/fail.svg';
import TEMPDATA from "../../constants/temporyData";
import DATA from "../../constants/Data";
import INFO from '../../constants/Info';

function App() {
  const navigate = useNavigate();
//  let location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [isPersonalDataPopupOpen, setIsPersonalDataPopupOpen] = React.useState(false);
  const [textPopup, setTextPopup] = React.useState("");
  const [imagePopup, setImagePopup] = React.useState("");
  const [newCons, setNewCons] = React.useState([]);
  const [oldCons, setOldCons] = React.useState([]);
  const [allPrice, setAllPrice] = React.useState([]);
  const [allArticles, setAllArticles] = React.useState([]);
  const [oneElementPrice, setOneElementPrice] = React.useState([]);
  const [feedbacks, setAllFeedbacks] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({
    isImageOpen: false,
    link: "",
    name: "",
  });

  function login(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.adminToken) {
          localStorage.setItem("token", res.adminToken);
          setLoggedIn(true);
          getCurrentUser();
          navigate("admin");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setTextPopup(INFO.EMAILFAIL);
          setImagePopup(fail);
          setIsInfoPopupOpen(true);
        } else {
          setTextPopup(INFO.AUTORIZATIONFAIL);
          setImagePopup(fail);
          setIsInfoPopupOpen(true);
        }
      });
  }
  function onSubmitLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    login(email, password);
  }
  //проверка пользователя
  function getCurrentUser() {
    const token = localStorage.getItem("token");
    mainApi
      .getCurrentUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        }
      })
      .catch((err) => {
        setTextPopup(INFO.USERFAIL);
        setImagePopup(fail);
        setIsInfoPopupOpen(true);
      });
  }
  //выход
  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  }
  //Пишем новую консультацию в БД
  function createConsultationHandle(getName, getTelephone, getMessage) {
    mainApi
      .createConsultation(getName, getTelephone, getMessage)
      .then((res) => {
        sendToTelegram(getName, getTelephone, getMessage) //если данные записались, то отправляем сообщение в телеграм
      })
      .catch((err) => {
        setTextPopup(INFO.MESSAGEFAILTEXT);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  //Отправляем сообщение в телеграм
  function sendToTelegram(getName, getTelephone, getMessage) {
    mainApi
      .getConsultation(getName, getTelephone, getMessage)
      .then((response) => {
        setTextPopup(INFO.MESSAGESUCCESSTEXT);
        setImagePopup(success)
        setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        setTextPopup(INFO.MESSAGEFAILTEXT);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  // получаем все неархивные консультации
  function getNewConsultations() {
    mainApi
      .getNonArchiveConsultation()
      .then((data) => {
        setNewCons(data)
      })
      .catch((err) => {
        setTextPopup(INFO.GETDATAFAIL);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  //Отправляем сообщение в архив
  function toArchive(id) {
    mainApi
      .toArchiveConsultation(id)
      .then((data) => {
        getNewConsultations()
        setTextPopup(INFO.EXCELLENT);
        setImagePopup(success)
        setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        setTextPopup(INFO.GETDATAFAIL);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  // получаем все архивные консультации
  function getOldConsultations() {
    mainApi
      .getArchiveConsultation()
      .then((data) => {
        setOldCons(data)
      })
      .catch((err) => {
        setTextPopup(INFO.GETDATAFAIL);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  // Читаем весь прайс
  function getAllPrice() {
    mainApi
      .getAllPrice()
      .then((data) => {
        setAllPrice(data)
      })
      .catch((err) => {
        setTextPopup(INFO.GETDATAFAIL);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  //Читаем один элемент прайса
  function getOneElementOfPrice(id) {
    mainApi
      .getOnePrice(id)
      .then((data) => {
        setOneElementPrice(data)
      })
      .catch((err) => {
        setTextPopup(INFO.GETDATAFAIL);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  //Удаляем один элемент прайса
  function delOneElementOfPrice(id) {
    mainApi
      .delOnePrice(id)
      .then((data) => {
        getAllPrice()
        setTextPopup(INFO.OK);
        setImagePopup(success)
        setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        setTextPopup(INFO.GETDATAFAIL);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  // Создаём пункт прайса
  function createPrice(data) {
    mainApi
      .createPrice(data)
      .then((item) => {
        getAllPrice()
        setTextPopup(INFO.GOODPRICE);
        setImagePopup(success)
        setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        setTextPopup(INFO.FAILPRICE);
        setImagePopup(fail)
        setIsInfoPopupOpen(true);
      })
  }
  //Читаем все материалы
  function getAllArticle(){
    mainApi
    .getAllArticles()
    .then((item) => {
      setAllArticles(item)
    })
    .catch((err) => {
      setTextPopup(INFO.DATAFAIL);
      setImagePopup(fail)
      setIsInfoPopupOpen(true);
    })
  }
//Получаем все отзывы
function getAllFeedbacks(){
  mainApi
  .getAllFeedback()
  .then((item) => {
    setAllFeedbacks(item)
  })
  .catch((err) => {
    setTextPopup(INFO.DATAFAIL);
    setImagePopup(fail)
    setIsInfoPopupOpen(true);
  })
}
React.useEffect(() => {
  getAllArticle()
  getAllFeedbacks()
}, [])

  function PersonalDataPopupOpen(){
    setIsPersonalDataPopupOpen(true)
  }

  function handleCardClick(link, name) {
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }
  //Закрыть все попапы
  function onClosePopup() {
    setIsInfoPopupOpen(false);
    setIsPersonalDataPopupOpen(false)
    setTextPopup("");
    setImagePopup("");
    setSelectedCard({
      isImageOpen: false,
      link: "",
      name: "",
    });
  }
  // Закрытие попапа с формой или картинкой. Клик в любом месте
  function closeByOverlayClick(event) {
    if (
      event.target.classList.contains("modal") &&
      event.target.classList.contains("modal_open")
    ) {
      onClosePopup();
    }
  }

  return (
    <div className="App">
      <Header />
      <Navigation
        allData={allArticles}
        loggedIn={loggedIn}
        handleSignOut={handleSignOut}
      />
      <Routes>
        <Route path="/" element={<Main
          createConsultationHandle={createConsultationHandle}
          PersonalDataPopupOpen={PersonalDataPopupOpen}
          handleCardClick={handleCardClick}
          allArticles={allArticles}
          feedbacks={feedbacks}
        />} />
        <Route path="/more/:id/:key" element={<More
          getAllArticle={getAllArticle}
          allArticles={allArticles}
          tempData={TEMPDATA}
          createConsultationHandle={createConsultationHandle}
          PersonalDataPopupOpen={PersonalDataPopupOpen}
        />} />
        <Route path="/price" element={<Price
          allPrice={allPrice}
          getAllPrice={getAllPrice}
        />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login
          onSubmitLogin={onSubmitLogin}
          loggedIn={loggedIn}
        />} />
        <Route path='/404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />} >
          <Route path='/admin' element={<Admin
            newCons={newCons}
            oldCons={oldCons}
            allPrice={allPrice}
            oneElementPrice={oneElementPrice}
            toArchive={toArchive}
            getNewConsultations={getNewConsultations}
            getOldConsultations={getOldConsultations}
            getAllPrice={getAllPrice}
            createPrice={createPrice}
            getOneElementOfPrice={getOneElementOfPrice}
            delOneElementOfPrice={delOneElementOfPrice}
          />} />
        </Route>
      </Routes>
      <section className="Main__map">
        <Title
          text={DATA.FINDUS}
        />
        <FindUs />
      </section>
      <footer className="Main__footer">
        <Footer />
      </footer>
      <Popup
        title={textPopup}
        image={imagePopup}
        isOpenPopup={isInfoPopupOpen}
        onClosePopup={onClosePopup}
        submitText={INFO.BUTTONTEXT}
      />
      <PersonalDataPopup 
        isPersonalDataPopupOpen={isPersonalDataPopupOpen}
        onClosePopup={onClosePopup}
        submitText={INFO.BUTTONTEXT}
      />
      <ImagePopup
        name={selectedCard.name}
        link={selectedCard.link}
        onClose={onClosePopup}
        isOpen={selectedCard.isImageOpen}
        closeImagePopup={closeByOverlayClick}
      />
    </div>
  );
}
export default App;