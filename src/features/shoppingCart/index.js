import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import ShoppingCartItems from './ShoppingCartItems'
import ShoppingCartTotal from './ShoppingCartTotal'
import {
  CircleIcon,
  PlaidIcon,
  TriangleIcon,
} from '../../constants/common-constants'
import { DotIcon } from '../../constants/common-constants'

const ShoppingCart = () => {
  return (
    <div className='home-background flex'>
      <Header />
      <div class='shopping-cart__triangle-icon'>
        <img src={TriangleIcon} />
      </div>
      <div class='shopping-cart__dot-icon'>
        <img src={DotIcon} />
      </div>
      <div class='shopping-cart__circle-icon'>
        <img src={CircleIcon} />
      </div>
      <div class='shopping-cart__circle-icon'>
        <img src={CircleIcon} />
      </div>
      <div class='shopping-cart__plaid-icon'>
        <img src={PlaidIcon} />
      </div>
      <div class='shopping-cart__triangle-icon-2'>
        <img src={TriangleIcon} />
      </div>
      <ItemCard title={'Shopping Cart'}>
        <ShoppingCartItems />
        <ShoppingCartTotal />
      </ItemCard>
      <div class='shopping-cart__plaid-icon-2'>
        <img src={PlaidIcon} />
      </div>
      <div class='shopping-cart__plaid-icon-3'>
        <img src={PlaidIcon} />
      </div>
      <Footer />
    </div>
  )
}

export default ShoppingCart
