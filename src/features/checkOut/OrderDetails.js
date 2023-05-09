import { Button, Form, Input, Space } from 'antd'
import React, { useState } from 'react'

const OrderDetails = ({ values }) => {
  const { discount, grandTotal, item, promotionCode, subtotal } = values

  const [code, setPromotionCode] = useState(promotionCode)

  return (
    <div className='order-details'>
      <div className='border-bottom d-flex gray-1-color pb-4'>
        <div class='w-100 order-details__title '>Order Details</div>
        <div class='pr-5 order-details__item'>{item?.length} items</div>
      </div>

      <div class='border-bottom gray-1-color pb-2'>
        {item.map((value) => {
          return (
            <div class='d-flex py-3'>
              <div class='w-100 order-details__item-name'>{value.name}</div>
              <div class='pr-5 order-details__item-price'>${value.price}</div>
            </div>
          )
        })}
      </div>

      <div class='border-bottom'>
        <div class='gray-1-color order-details__item-name py-3'>
          Add Promotion Code
        </div>
        <Space.Compact style={{ width: '80%' }}>
          <Input
            className='order-details__promotion-code'
            defaultValue='Input code'
            value={code}
            onChange={(input) => {
              setPromotionCode(input.target.value)
            }}
          />
          <Button
            className='order-details__button order-details__apply-code'
            type='primary'
          >
            Apply Code
          </Button>
        </Space.Compact>

        <div className='d-flex pb-2 pt-3'>
          <div class='w-100 gray-3-color'>Subtotal</div>
          <div class='pr-5 gray-1-color order-details__item-price'>
            ${subtotal}
          </div>
        </div>

        <div className='d-flex pt-2 pb-3'>
          <div class='w-100 gray-3-color'>Discount</div>
          <div class='pr-5 gray-1-color order-details__item-price'>
            ${discount}
          </div>
        </div>
      </div>

      <div className='d-flex gray-1-color py-3'>
        <div class='w-100 order-details__item-name order-details__total'>
          TOTAL
        </div>
        <div class='pr-5 order-details__item-price'>${grandTotal}</div>
      </div>

      <div class='my-3'>
        <Form.Item shouldUpdate>
          <Button
            className='order-details__place-order order-details__button '
            type='primary'
            htmlType='submit'
          >
            Place Order
          </Button>
        </Form.Item>

        <div class='py-2 order-details__accept-Terms gray-1-color'>
          I’ve read and accept the <a href='/'>Terms</a>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
