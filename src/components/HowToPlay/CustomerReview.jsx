import React from 'react'

const CustomerReview = ({img, userName, title, teams, desc, price}) => {
  return (
    <div className='customer-review-container'>
    <div className='cust-header'>
        <img src={img} alt={userName} className='cust-img' />
        <h4>{userName}</h4>
    </div>
    <div className='cust-badge-black'>
        <div className='cust-win-title'>
            <h5>{title}</h5>
            <small>{teams}</small>
        </div>
        <div className='cust-win-price'>
            <h6>₹{price}</h6>
            <small>WINNINGS</small>
        </div>
    </div>
    <div className='cust-para'>
        {desc}
    </div>
    </div>
  )
}

export default CustomerReview