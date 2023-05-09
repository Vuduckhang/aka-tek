import { DatePicker, Form } from 'antd'
import React from 'react'
import FormItem from '../../components/FormItem'

const Payment = () => {
  return (
    <div>
      <div class='w-100 order-details__title gray-1-color pb-4'>Payment</div>
      <div class='row'>
        <FormItem
          className='mb-4 col-6'
          rules={[{ required: true, message: 'Please input card number!' }]}
          name={'cardNumber'}
          titleClass={'billing-detail__title pb-1'}
          title={'Card Number'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'XXXX XXXX XXXX XXXX'}
        />
        <FormItem
          className='mb-4 col-6'
          rules={[{ required: true, message: 'Please input Name on Card!' }]}
          name={'nameOnCard'}
          titleClass={'billing-detail__title pb-1'}
          title={'Name on Card'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'e.g. DAVID NGUYEN'}
        />
      </div>

      <div class='row'>
        <div className=' col-6'>
          <div class={'billing-detail__title pb-1'}>{'Expire Date'}</div>
          <Form.Item
            name={'expireDate'}
            rules={[{ required: true, message: 'Please input Expire Date!' }]}
          >
            <DatePicker placeholder='Select' />
          </Form.Item>
        </div>
        <FormItem
          className=' col-6'
          rules={[{ required: true, message: 'Please input Secure code!' }]}
          name={'secureCode'}
          titleClass={'billing-detail__title pb-1'}
          title={'Secure code'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'CCV'}
        />
      </div>
    </div>
  )
}

export default Payment
