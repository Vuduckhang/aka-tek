import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import ShoppingCartItems from './ShoppingCartItems'
import ShoppingCartTotal from './ShoppingCartTotal'

const ShoppingCart = () => {
  return (
    <div className='home-background flex'>
      <Header />
      <ItemCard title={'Shopping Cart'}>
        <ShoppingCartItems />
        <ShoppingCartTotal />
      </ItemCard>
      <Footer />
    </div>
  )
}

export default ShoppingCart
