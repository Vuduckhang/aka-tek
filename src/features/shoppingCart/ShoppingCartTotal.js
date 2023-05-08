import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const ShoppingCartTotal = () => {
  const data = {
    subtotal: 400,
  }
  const [promotionCode, setPromotionCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [grandTotal, setGrandTotal] = useState(data?.subtotal)
  const navigate = useNavigate()

  const onApplyCode = () => {
    console.log('Promotion Code : ', promotionCode)
    const discount = (data.subtotal * 6) / 100
    const grandTotal = data.subtotal - discount
    setDiscount(discount)
    setGrandTotal(grandTotal)
  }

  const onCheckout = () => {
    console.log('onCheckout : /check-out')
    navigate('/check-out', {
      state: {
        subtotal: data.subtotal,
        discount: discount,
        grandTotal: grandTotal,
        promotionCode,
        item: [
          { name: 'PD Videos - Grade 1', price: 100.0 },
          { name: 'Textbook 1', price: 100.0 },
          { name: 'Textbook 2', price: 100.0 },
        ],
      },
    })
  }

  return (
    <div className='pb-2 shopping-total'>
      <div className='d-flex flex-row-reverse background-grey'>
        <div class='p-2 pr-5 mr-2'>${data.subtotal}</div>
        <div class='p-2 pr-5 bd-highlight'>Subtotal</div>
      </div>

      <div className='d-flex ml-3 my-3'>
        <div class='w-100 d-flex'>
          <div class='p-2 mx-5 shopping-total__title'>Apply Promotion code</div>
          <Input
            className='p-3 shopping-total__promotion-code'
            placeholder='Promotion code'
            value={promotionCode}
            onChange={(input) => {
              setPromotionCode(input.target.value)
            }}
          />
          <Button
            type='primary'
            className='shopping-total__apply-code mx-5 '
            onClick={onApplyCode}
          >
            Apply Code
          </Button>
        </div>
        <div class='p-2 mr-3 pr-5 bd-highlight'>Discount</div>
        <div class='p-2 pr-5 mr-2'>{discount ? `-$${discount}` : `$0`}</div>
      </div>

      <div className='d-flex flex-row-reverse background-grey'>
        <div class='p-2 pr-5 mr-2'>${grandTotal}</div>
        <div class='p-2 pr-5 bd-highlight'>GRAND TOTAL</div>
      </div>

      <div className='d-flex flex-row-reverse'>
        <Button
          type='primary'
          className='shopping-total__apply-code shopping-total____check-out mx-5 my-4'
          onClick={onCheckout}
        >
          Check out
        </Button>
      </div>
    </div>
  )
}

export default ShoppingCartTotal
