import React from 'react'

const ItemCard = (props) => {
  const { title, children } = props
  return (
    <div className='item-card'>
      <div className='form-title'>
        {title}
        <div />
      </div>
      {children ? <div className='item-card-body'>{children}</div> : <></>}
    </div>
  )
}

export default ItemCard
