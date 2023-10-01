import {useDispatch} from "react-redux";
import  flag from "../../images/flag.svg";
import  flags from "../../images/flags.png";
import i18n from "../../language/118next";
import {Link, useLocation} from "react-router-dom";
import  phone from "../../images/phone.svg";
import  email from "../../images/email.svg";
import './SubNav.scss'
import {useState, useEffect, useTransition} from "react";
const exceptionalRoutes = ["/login","/admin"]



const SubNav = () => {
  const dispatch = useDispatch()
  const localtion = useLocation()
  const [laungeState, setLaungeState] = useState(localStorage.getItem("lang") || "uz")
  function changeLang(selectedLangCode) {
    i18n.changeLanguage(selectedLangCode);
    setLaungeState(selectedLangCode)
    dispatch({language_code:selectedLangCode, type:"CHANGE_LANGUAGE"})
  }
  const [selectedImg, setSelectedImg] = useState(localStorage.getItem('selectedImg') || "uz");

  useEffect(() => {
    localStorage.setItem('selectedImg', selectedImg);
  }, [selectedImg]);


  const imgStyle = {
    borderBottom: selectedImg === 'flag' ? '4px solid #007aff' : 'none'
  };

  const imgStyle2 = {
    borderBottom: selectedImg === 'flags' ? '4px solid #007aff' : 'none'
  };


  return !exceptionalRoutes.includes(localtion.pathname) ? (
    <div className="nav">
      <div className="navbar_img"  onClick={() => setSelectedImg('flag')}>
        <img src={flag} style={laungeState === "uz" ? {borderBottom:"2px solid dodgerblue"}: null} onClick={() => changeLang("uz")} />
      </div>
      <div  className="navbar_img" onClick={() => setSelectedImg('flags')}>
        <img src={flags}  style={laungeState === "ru" ? {borderBottom:"2px solid dodgerblue"}: null} onClick={() => changeLang("ru")}/>
      </div>
      <div className="navbar_contact">
         <div className="navbar_phone">
        <a href="tel:+89992475515"  className="nav-link">
          <img src={phone}/>
           <span>+998 91 186 00 85</span>
        </a>
         </div>
        <div className="navbar_phone">
          <Link to="mailto:erkinjon.hodjaev@gmail.com" target="_blank" className="nav-link">
            <img src={email}/>
            <span>erkinjon.hodjaev@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  ) :<></>
}
export default SubNav