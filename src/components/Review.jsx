import React from 'react'
import { review } from '../Data'
import quoteImg from '../assets/images/quote-img.png'

const Review = () => {
  return (
    <>
    <section className='review' id='review'>
      <h1 className="heading" >
        Customer's <span> Review</span>
      </h1>
      <div className="box-container">
        {
            review.map((item, index) => (
              <div className="box" key={index}>
                <img src={quoteImg} alt="review" className='quote'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque ut est semper, ut ultricies urna consectetur. Donec bibendum, nunc vel elementum consectetur, urna nunc consectetur ipsum, at pellentesque justo ex vel neque.</p>
                <img src={item.img} alt="" className='user' />
                <h3>John Deo</h3>
                <div className="stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
              </div>
            ))

  
        }
      </div>
      </section>
    </>
  )
}

export default Review
