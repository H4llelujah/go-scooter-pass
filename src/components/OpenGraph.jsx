import React from 'react'
import promo from '../img/promo_pic.png'
import YandexGo from '../img/YandexGo.png'
import MyButton from './UI/button/MyButton'

export default function OpenGraph() {
  return (
    <div className='OpenGraph openGraph-background'>
      <div className='OpenGraph_wrapper wrapper'>
      <div className='left-block'>
            <div className='left-block-promo'><img src={YandexGo} alt='YandexGo'></img></div>
            <div className='left-block-header'>Вступайте в&nbsp;клуб Самокатов</div>
            <div className='left-block-text'>Купите абонемент, чтобы стать частью клуба в новом сезоне-2024. 8&nbsp;месяцев за&nbsp;
            <span className='price'><span className='price_1'>499₽</span> 3190₽</span>
            </div>
            <MyButton className= {'btn'}>Стать частью клуба</MyButton>
        </div>
        <div className='right-block'>
          <img src={promo} alt='promo'></img>
          <div className='ellipse'></div>
        </div>
      </div>
    </div>
  )
}
