import React from 'react'
import promo1 from '../img/Promo_pic_1.svg';
import promo2 from '../img/Promo_pic_2.svg';
import promo3 from '../img/Promo_pic_3.svg';
import promo4 from '../img/Promo_pic_4.svg';

export default function Promo() {
  return (
    <div className='promo wrapper'>
        <h2 className='promo-header'>
          Вот что даёт участие в&nbsp;клубе
        </h2>
        <div className='promo-content'>
          <div className='promo-content-item'>
            <img src={promo1} alt='promo_pic'/>
            <p>0 ₽ за старт в каждой поездке</p>
          </div>
          <div className='promo-content-item'>
            <img src={promo2} alt='promo_pic'/>
            <p>Катаетесь c друзьями? Бронируйте до трёх самокатов c аккаунта c абонементом — так&nbsp;y&nbsp;всех будет бесплатный старт</p>
          </div>
            
          <div className='promo-content-item'>
            <img src={promo3} alt='promo_pic'/>
            <p>Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть</p>
          </div>
            
          <div className='promo-content-item'>
            <img src={promo4} alt='promo_pic'/>
            <p>Если самокат недостаточно заряжен или c ним неудобно переходить дорогу, замените по пути на другой — это бесплатно</p>
          </div>
          
        </div>
      </div>
  )
}
