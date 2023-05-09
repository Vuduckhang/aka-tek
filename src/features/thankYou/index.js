import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import BillingDetail from '../checkOut/BillingDetail'
import Payment from '../checkOut/Payment'

const ThankYou = () => {
  return (
    <div className='flex'>
      <Header />
      <ItemCard title={'Check out'}>
        <div class=''>
          <BillingDetail />
          <Payment />
        </div>
      </ItemCard>
      <Footer />
    </div>
  )
}

export default ThankYou
