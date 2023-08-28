import React from 'react'
import promo from '../img/promo.png'
import circle_text from '../img/circle-text.png'

export default function OpenGraph() {
  return (
    <div className='OpenGraph'>
        <div className='left-block'>
            <div className='left-block-promo'>Яндекс <span>Go</span></div>
            <div className='left-block-header'>Вступайте в клуб Самокатов</div>
            <div className='left-block-text'>Купите абонемент, чтобы стать частью клуба в новом сезоне-2024. 8 месяцев за
            <span className='price'>
                <span className='newPrice'>499Р</span>
                <span className='oldPrice'>3190Р</span>
            </span>
            </div>
            <button className='btn'>Стать частью клуба</button>
        </div>
        <div className='right-block'>
            <img className='circle-text' src={circle_text} alt="text" />
            <img className='promo-img' src={promo} alt="promo" />
        </div>
    </div>
  )
}
