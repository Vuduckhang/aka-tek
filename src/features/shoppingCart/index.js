import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ItemCard from '../../components/ItemCard'
import ShoppingCartItems from './ShoppingCartItems'
import ShoppingCartTotal from './ShoppingCartTotal'

const ShoppingCart = () => {
  return (
    <div className='home-background flex'>
      <Header />
      <div>
        <ItemCard title={'Shopping Cart'}>
          <ShoppingCartItems />
          <ShoppingCartTotal />
        </ItemCard>
      </div>
      <Footer />
    </div>
  )
}

export default ShoppingCart
