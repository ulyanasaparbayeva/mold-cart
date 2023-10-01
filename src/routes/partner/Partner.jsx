import repair from "../../images/repair.png";
import './Partner.scss'

import React from 'react'
import {useTranslation} from "react-i18next";

const Partner = () => {
  const {t} = useTranslation()
  return (
    <div className="partners__container">
      <h1>{t('Хамкорлар')}</h1>
      <div className="parterns__images">
        <img src={repair} className="images"/>
        <p>{t('Қурилиши давом этяпти')}</p>
      </div>
    </div>
  )
}
export default Partner