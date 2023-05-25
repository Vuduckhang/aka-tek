import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const ShoppingCartTotal = ({ isMobile }) => {
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
    if (promotionCode) {
      setDiscount(discount)
      setGrandTotal(grandTotal)
    }
  }

  const onCheckout = () => {
    console.log('onCheckout : /check-out')
    navigate('/check-out', {
      state: {
        subtotal: data.subtotal || 0,
        discount: discount || 0,
        grandTotal: grandTotal || 0,
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
      <div className='row m-2 ml-0 background-grey justify-content-end '>
        <div class='col-2 py-2 d-flex justify-content-end'>Subtotal</div>
        <div class={`${isMobile ? 'col-3' : 'col-2'} py-2`}>
          ${data.subtotal}
        </div>
      </div>

      {isMobile ? (
        <>
          <div class='row m-2'>
            <div class='col-4 shopping-total__title'>Apply Promotion code</div>
            <div class='col-8 pr-0'>
              <Input
                className='shopping-total__promotion-code w-100'
                placeholder='Promotion code'
                value={promotionCode}
                onChange={(input) => {
                  setPromotionCode(input.target.value)
                }}
              />
            </div>
          </div>
          <div class='d-flex justify-content-end m-2'>
            <Button
              type='primary'
              className='shopping-total__apply-code'
              onClick={onApplyCode}
            >
              Apply Code
            </Button>
          </div>
          <div class='row justify-content-end'>
            <div class='py-2 col-2 d-flex justify-content-end'>Discount</div>
            <div class={`${isMobile ? 'col-3' : 'col-2'} py-2 p-2 pr-5 mr-2`}>
              {discount ? `-$${discount}` : `$0`}
            </div>
          </div>
        </>
      ) : (
        <div className='row my-2 justify-content-end'>
          <div class='col-8 row'>
            <div class='col-3 shopping-total__title'>Apply Promotion code</div>
            <Input
              className='col-4 shopping-total__promotion-code mr-2'
              placeholder='Promotion code'
              value={promotionCode}
              onChange={(input) => {
                setPromotionCode(input.target.value)
              }}
            />
            <div>
              <Button
                type='primary'
                className='w-100 shopping-total__apply-code'
                onClick={onApplyCode}
              >
                Apply Code
              </Button>
            </div>
          </div>
          <div class='col-2 py-2 d-flex justify-content-end'>Discount</div>
          <div class='col-2 py-2'>{discount ? `-$${discount}` : `$0`}</div>
        </div>
      )}

      <div className='row m-2 background-grey justify-content-end'>
        <div class='col-2 py-2 d-flex justify-content-end'>GRAND TOTAL</div>
        <div class={`${isMobile ? 'col-3' : 'col-2'} py-2`}>${grandTotal}</div>
      </div>

      <div className='d-flex justify-content-end pt-2 mr-2'>
        <Button
          type='primary'
          className='shopping-total__apply-code shopping-total__check-out'
          onClick={onCheckout}
        >
          Check out
        </Button>
      </div>
    </div>
  )
}

export default ShoppingCartTotal
