import React from 'react';
import {  Modal } from 'antd';
import {WarningOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDelete} from '../../Redux/request';

const titleModal = <><div style={{color:'red',textAlign:'center', display:'flex' , justifyContent:'center', gap:10}}>
  <WarningOutlined style={{fontSize:25}} />  XÓA ĐỊA CHỈ
  </div> </>
const ModalDelete = (props) => {

  const {modalDelete} = useSelector( state => state.modalReducer);
  const dispatch = useDispatch();
 
  const handleOk = () => {
    dispatch(closeModalDelete)
  };
  const handleCancel = () => {
    dispatch(closeModalDelete)
  };
  return (
    <>
      <Modal title={titleModal} open={modalDelete} onOk={handleOk} onCancel={handleCancel}>
        <p style={{fontSize:16}}  >Bạn có muốn Xóa địa chỉ: <span style={{fontWeight:600}}>{props.title}</span></p>
        <p style={{fontSize:16,margin:0}} > <span style={{color:'red'}}>* Lưu ý:</span> sau khi xóa không thể khôi phục chỉ có thể tạo lại !</p>
      </Modal>
    </>
  )
}

export default ModalDelete