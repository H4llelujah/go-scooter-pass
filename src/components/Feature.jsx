import React from 'react'
import feature1 from '../img/feature_pic_1.png'
import feature2 from '../img/feature_pic_2.png'
import feature3 from '../img/feature_pic_3.png'
import feature4 from '../img/feature_pic_4.png'
import addition1 from '../img/add_1.png'
import addition2 from '../img/add_2.png'
import addition4 from '../img/add_4.png'
import Slider from './Slider'

export default function Feature ({windowWidth}) {
  
  return (
    <div className='feature wrapper'>
        <h2 className='feature-header'>
          Эксклюзивный доступ к&nbsp;событиям Самокатов
        </h2>
        <p className='feature-text'>
        C абонементом — y вас доступ к&nbsp;специальным мероприятиям, скидки&nbsp;и классный мерч. B 2023 году мы танцевали на Даче Плюс c&nbsp;Антохой&nbsp;MC, катались на самокатах c&nbsp;Сергеем Мезенцевым и слушали xop Attaque de Panique
        </p>
        {windowWidth > 900 ?
        <div className='feature-preview'>
          <div className='feature-preview-item'>
            <img className='feature-preview-img' src={feature1} alt='pic'></img>
            <img className='add-1' src={addition1} alt='add'></img>
          </div>
          <div className='feature-preview-item'>
            <img className='feature-preview-img' src={feature2} alt='pic'></img>
            <img className='add-2' src={addition2} alt='add'></img>
          </div>
          <div className='feature-preview-item'>
            <img className='feature-preview-img' src={feature3} alt='pic'></img>
          </div>
          <div className='feature-preview-item'>
            <img className='feature-preview-img' src={feature4} alt='pic'></img>
            <img className='add-4' src={addition4} alt='add'></img>
          </div>
        </div>
        :
        <Slider></Slider>
        }
      </div>
  )
}
