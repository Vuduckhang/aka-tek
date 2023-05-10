import { Form } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import BillingDetail from './BillingDetail'
import OrderDetails from './OrderDetails'
import Payment from './Payment'
import {
  CircleIcon,
  DotIcon,
  TriangleIcon,
} from '../../constants/common-constants'

const CheckOut = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    navigate('/thank-you')
  }

  return (
    <div className='home-background home-background__check-out'>
      <Header />
      <div class='check-out__triangle-icon'>
        <img src={TriangleIcon} />
      </div>
      <div class='check-out__dot-icon'>
        <img src={DotIcon} />
      </div>
      <div class='check-out__circle-icon'>
        <img src={CircleIcon} />
      </div>
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
      <div class='check-out__triangle-icon-2'>
        <img src={TriangleIcon} />
      </div>
      <div class='check-out__dot-icon-2'>
        <img src={DotIcon} />
      </div>
      <div class='check-out__circle-icon-2'>
        <img src={CircleIcon} />
      </div>
      <div class='check-out__dot-icon-3'>
        <img src={DotIcon} />
      </div>
      <Footer />
    </div>
  )
}

export default CheckOut
