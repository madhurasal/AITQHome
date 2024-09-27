import React from 'react'
import './Pricing.css'

const Pricing = ({title, price, storage, users, sendUp, users2}) => {
  return (
    <div className='container PricingCard'>
        <header>
            <p className='card-title'>{title}</p>
            <h1 className='card-price'>&#8377;  {price}</h1>
        </header>
        <div className='card-features'>
            <div className="card-storage">{storage}</div>
            <div className="card-user-allowed">{users}</div>
            <div className="card-user-allowed">{sendUp}</div>
            <div className="card-user-allowed">{users2}</div>

        </div>
    </div>
  )
}

export default Pricing