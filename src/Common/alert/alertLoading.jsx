import React from 'react'
import { Button, message } from 'antd';
const Alert = () => {
  const key = 'updatable';

  return (
    <>
    <Button onClick={()=>{message.loading('Đăng kí thành công ')}}>Click</Button>
    </>
  )
}

export default Alert