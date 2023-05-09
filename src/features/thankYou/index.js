import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

const ThankYouIcon = require('../../img/Group.jpg')

const ThankYou = () => {
  const navigate = useNavigate()
  return (
    <div className='flex'>
      <Header />
      <div class='thank-you d-flex justify-content-center'>
        <div class='text-center'>
          <div class='d-flex justify-content-center'>
            <div class='thank-you__icon'>
              <img src={ThankYouIcon} />
            </div>
          </div>
          <div class='thank-you__title gray-1-color my-2'>
            Thank you for your purchase!
          </div>
          <div class='thank-you__text'>Your order number is #STE1587975295</div>
          <div class='thank-you__text'>
            We will email you an order confirmation with details.
          </div>
          <Button
            className='order-details__button thank-you__button mt-5'
            type='primary'
            onClick={() => {
              navigate('/')
            }}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ThankYou
