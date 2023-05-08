import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ItemCard from '../../components/ItemCard'
import { useLocation } from 'react-router'
import { Button, Input } from 'antd'

const CheckOut = (props) => {
  const { state } = useLocation()
  const { discount, grandTotal, item, promotionCode, subtotal } = state

  return (
    <div className='home-background flex'>
      <Header />
      <ItemCard title={'Check out'}>
        <div class='row align-items-start'>
          <div class='col-8 '>Billing Detail</div>
          <div class='col-4'>
            <div>Order Details</div>
            {item.map((value) => {
              return (
                <div className='d-flex'>
                  <div class='w-100'>{value.name}</div>
                  <div class='pr-5'>${value.price}</div>
                </div>
              )
            })}

            <div>Add Promotion Code</div>
            <div class='w-100 d-flex'>
              <Input
                className='shopping-total__promotion-code'
                placeholder='Promotion code'
                value={promotionCode}
              />
              <Button type='primary' className='shopping-total__apply-code'>
                Apply Code
              </Button>
            </div>
            <div className='d-flex'>
              <div class='w-100'>Subtotal</div>
              <div class='pr-5'>${subtotal}</div>
            </div>

            <div className='d-flex'>
              <div class='w-100'>Discount</div>
              <div class='pr-5'>${discount}</div>
            </div>

            <div className='d-flex'>
              <div class='w-100'>TOTAL</div>
              <div class='pr-5'>${grandTotal}</div>
            </div>
          </div>
        </div>
      </ItemCard>
      <Footer />
    </div>
  )
}

export default CheckOut
