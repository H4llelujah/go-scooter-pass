import React from 'react'
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import MyButton from './UI/button/MyButton';

export default function Purchases() {
  return (
    <div className='purchases wrapper'>
        <div className='purchases-upper_content'>
          <div className='purchases-upper_content-item'>
            <h3 className='purchases-content-header'>Купить абонемент и&nbsp;вступить в&nbsp;клуб смогут те,&nbsp;кто в Плюсе</h3>
            <p className='purchases-content-text'>Зa каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и&nbsp;такси c Яндекс Go, покупки и&nbsp;заказы в других сервисах Яндекса</p>
          </div>
          <div className='purchases-upper_content-item'>
              <div className='shadow'></div>
              <img className='pic1' src={pic1} alt='pic'></img>
          </div> 
        </div>
        <div className='purchases-bottom_content'>
            <div className='purchases-bottom_content-item'>
              <div className='shadow'></div>
              <img className='pic3' src={pic2} alt='pic'></img>
            </div>
            <div className='purchases-bottom_content-item'>
              <h3 className='purchases-content-header'>80% наших пользователей уже в клубе и&nbsp;экономят на&nbsp;поездках</h3>
              <p className='purchases-content-text'>Присоединяйтесь — опция начнёт действовать в начале сезона-2024. Об&nbsp;открытии сезона предупредим заранее, чтобы вы были готовы</p>
              <MyButton>Хочу абонемент</MyButton>
          </div>
        </div>
      </div>
  )
}
