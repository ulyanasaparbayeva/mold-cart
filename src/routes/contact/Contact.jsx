import React from 'react'
import './Contact.scss'
import {FiFacebook, FiMapPin, FiPhoneCall, FiSend, FiYoutube} from "react-icons/fi";
import {Link} from "react-router-dom";
import email from "../../images/email.svg";
import {useTranslation} from "react-i18next";


const Contact = () => {
  const {t} = useTranslation()
  return (
    <div className={'contact__container'}>
    <h1>{t('Биз билан боғланиш')}</h1>
      <ul className="contact__list">
        <li>
          <FiPhoneCall className="contact__icons" />
          <Link  className="contact__link" href="tel:+89992475515">+998 91 186 00 85
          </Link>
        </li>
        <li style={{display:"flex", gap:"20px"}}>
          <Link className="contact__link" to="mailto:erkinjon.hodjaev@gmail.com" target="_blank">
            <img src={email}/>
          </Link>
          erkinjon.hodjaev@gmail.com
        </li>
        <li>
          <FiMapPin  className="contact__icons"/>
          {t('Наманган вилояти , Давлатобод тумани , Дустлик Шох кучаси 109-уй')}
        </li>
      </ul>
      <div className={'contact_footer'}>
        <b>{t('Бизни кузатиб боринг')}</b>
        <div className="footer_follow_wrapper">
          <Link to="" className="contact_follow-links">
            <FiSend className="contact__follow-icons"/>
          </Link>
          <Link to="" className="contact_follow-links">
            <FiFacebook className="contact__follow-icons"/>
          </Link>
          <Link to="" className="contact_follow-links">
            <FiYoutube className="contact__follow-icons"/>
          </Link>
        </div>
      </div>
      <iframe
        style={{marginTop:"30px"}}
        className="map"
        src="https://yandex.uz/map-widget/v1/?ll=71.612607%2C41.004148&z=14&l=map&pt=71.612607%2C41.004148~109 Dustlik Shokh street, Davlatabad district, Namangan region&size=large"
        width="560"
        height="400"
        frameBorder="0">
      </iframe>
    </div>
  )
}

export default Contact