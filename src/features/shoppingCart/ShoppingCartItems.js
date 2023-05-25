import React from 'react'
import { CloseIcon } from '../../constants/common-constants'

const ShoppingItem = ({ item, isMobile }) => {
  return (
    <div className='row py-2'>
      {isMobile ? (
        <div className='col-9 pr-2'>
          <div class='shopping-cart-item__image w-100'>
            <img src={item.image} />
          </div>
          <div class='w-100'>
            <div className='shopping-cart-item__title'>{item.title}</div>
            <div className='shopping-cart-item__text font-size-18'>
              {item.series ? <div>Series: {item.series}</div> : null}
              {item.subject ? <div>Subject: {item.subject}</div> : null}
              {item.name ? <div>{item.name}</div> : null}
            </div>
            {item.content ? (
              <div className='shopping-cart-item__text shopping-cart-item__content font-size-16 line-height-19 '>
                {item.content}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <div class='p-2 col-3 shopping-cart-item__image'>
            <img src={item.image} />
          </div>
          <div class='p-4 col-7 w-100'>
            <div className='shopping-cart-item__title'>{item.title}</div>
            <div className='shopping-cart-item__text font-size-18'>
              {item.series ? <div>Series: {item.series}</div> : null}
              {item.subject ? <div>Subject: {item.subject}</div> : null}
              {item.name ? <div>{item.name}</div> : null}
            </div>
            {item.content ? (
              <div className='shopping-cart-item__text shopping-cart-item__content font-size-16 line-height-19 '>
                {item.content}
              </div>
            ) : null}
          </div>
        </>
      )}

      <div class={`${isMobile ? 'col-3' : 'col-2'} row`}>
        <div class='col-md-6'>${item.price}</div>
        <div class='col-md-6 close-icon'>
          <img src={CloseIcon} />
        </div>
      </div>
    </div>
  )
}

const ShoppingCartItems = ({ isMobile }) => {
  const data = [
    {
      title: 'Grade 1: Video 1',
      image: require('../../img/image.png'),
      series: 'A',
      subject: 'Math',
      price: 50,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
      title: 'Grade 2: Video 1',
      image: require('../../img/image.png'),
      series: 'A',
      subject: 'Math',
      price: 100,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
  ]

  const textbooks = [
    {
      title: 'Text Book 1',
      image: require('../../img/image.png'),
      name: 'David Khalifa',
      price: 150,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
      title: 'Text Book 2',
      image: require('../../img/image.png'),
      name: 'David Khalifa',
      price: 111,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
  ]
  return (
    <div className='shopping-cart-item w-100'>
      <div className='row py-2 shopping-cart-item__title-text shopping-cart-item__item-price'>
        <div class='col-10'>Items</div>
        <div class='col-2 pl-0'>Price</div>
      </div>

      <div className='border-bottom pb-4'>
        <div class='py-2 w-75 shopping-cart-item__title-text'>
          Professional Development Videos{' '}
        </div>
        {data.map((item) => {
          return <ShoppingItem item={item} isMobile={isMobile} />
        })}
      </div>

      <div class='py-2 w-75 shopping-cart-item__title-text'>Textbooks</div>
      {textbooks.map((item) => {
        return <ShoppingItem item={item} isMobile={isMobile} />
      })}
    </div>
  )
}

export default ShoppingCartItems
