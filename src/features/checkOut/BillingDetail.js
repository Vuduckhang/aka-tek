import React from 'react'
import FormItem from '../../components/FormItem'

const BillingDetail = () => {
  return (
    <div className='billing-detail border-bottom'>
      <div class='w-100 order-details__title gray-1-color pb-4'>
        Billing Detail
      </div>
      <div class='row'>
        <FormItem
          className='mb-4 col-6'
          rules={[
            { required: true, message: 'Please input first name!' },
            {
              pattern: new RegExp('([a-zA-Z]{3,30}\\s*)+'),
              message: 'Format is wrong',
            },
          ]}
          name={'firstName'}
          titleClass={'billing-detail__title pb-1'}
          title={'First Name'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'Input your first name...'}
        />
        <FormItem
          className='mb-4 col-6'
          rules={[
            { required: true, message: 'Please input last name!' },
            {
              pattern: new RegExp('([a-zA-Z]{3,30}\\s*)+'),
              message: 'Last name is wrong format',
            },
          ]}
          name={'lastName'}
          titleClass={'billing-detail__title pb-1'}
          title={'Last Name'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'Input your last name...'}
        />
      </div>
      <div class='row'>
        <FormItem
          className='mb-4 col-6'
          rules={[
            { required: true, message: 'Please input email!' },
            {
              pattern: new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
              message: 'Email is wrong format',
            },
          ]}
          name={'email'}
          titleClass={'billing-detail__title pb-1'}
          title={'Email'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'Input your email...'}
        />
        <FormItem
          className='mb-4 col-6'
          rules={[
            { required: true, message: 'Please input phone number!' },
            {
              pattern: new RegExp('^[0-9]{10,12}$'),
              message: 'Phone number is number ,10 < length < 12',
            },
          ]}
          name={'phone'}
          titleClass={'billing-detail__title pb-1'}
          title={'Phone'}
          inputClass={'billing-detail__input'}
          inputPlaceholder={'Input your phone...'}
        />
      </div>

      <FormItem
        className='mb-5'
        name={'address'}
        titleClass={'billing-detail__title pb-1'}
        title={
          <>
            Address <span class='gray-3-color'>(Optional)</span>
          </>
        }
        inputClass={'billing-detail__input'}
        inputPlaceholder={'Input your address...'}
      />
    </div>
  )
}

export default BillingDetail
