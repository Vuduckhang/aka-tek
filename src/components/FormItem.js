import { Form, Input } from 'antd'
import React from 'react'

const FormItem = (props) => {
  const {
    className,
    name,
    titleClass,
    title,
    inputClass,
    inputPlaceholder,
    ...prop
  } = props

  return (
    <div className={className}>
      <div class={titleClass}>{title}</div>
      <Form.Item name={name} {...prop}>
        <Input className={inputClass} placeholder={inputPlaceholder} />
      </Form.Item>
    </div>
  )
}

export default FormItem
