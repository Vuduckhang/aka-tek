import { Form } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import BillingDetail from './BillingDetail'
import OrderDetails from './OrderDetails'
import Payment from './Payment'

const CheckOut = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    navigate('/thank-you')
  }

  return (
    <div className='home-background flex'>
      <Header />
      <ItemCard title={'Check out'}>
        <Form form={form} onFinish={onFinish}>
          <div class='row align-items-start'>
            <div class='col-8 border-right'>
              <BillingDetail />
              <Payment />
            </div>
            <div class='col-4'>
              <OrderDetails values={state} />
            </div>
          </div>
        </Form>
      </ItemCard>
      <Footer />
    </div>
  )
}

export default CheckOut
