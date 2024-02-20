import React, { useState } from 'react'
import { Button, Modal } from 'antd';
const title = <h2 className=' font-serif text-[#5d87ff] text-2xl' style={{borderBottom:"1px solid #5d87ff"}}>Tạo chi nhánh </h2>
const AddBranchModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <form action="">
        <div className='flex flex-col mt-2'>
            <label className='font-semibold'>Tên Chi Nhánh :</label>
            <input placeholder='Tên chi nhánh' className =" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md" style={{boxShadow:"0px 0px 9px 0px rgba(0,0,0,0.5)", border:"none"}} type="text" />
        </div>
        <div className='flex flex-col mt-2'>
            <label className='font-semibold'>SĐT :</label>
            <input placeholder='Tên chi nhánh' className =" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md" style={{boxShadow:"0px 0px 9px 0px rgba(0,0,0,0.5)", border:"none"}} type="text" />
        </div>
        <div className='flex flex-col mt-2'>
            <label className='font-semibold'>Địa chỉ :</label>
            <input placeholder='Tên chi nhánh' className =" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md" style={{boxShadow:"0px 0px 9px 0px rgba(0,0,0,0.5)", border:"none"}} type="text" />
        </div>
        <div className='flex flex-col mt-2'>
            <label className='font-semibold'>Link google map :</label>
            <input placeholder='Tên chi nhánh' className =" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md" style={{boxShadow:"0px 0px 9px 0px rgba(0,0,0,0.5)", border:"none"}} type="text" />
        </div>

       </form>
      </Modal>
    </>
  )
}

export default AddBranchModal