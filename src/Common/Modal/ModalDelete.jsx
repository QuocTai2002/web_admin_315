import React from 'react';
import {  Modal } from 'antd';
import {WarningOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDelete} from '../../Redux/request';
import * as typeAction from '../../constants/constant'
import { deleteBranch } from '../../Redux/thunk/branchThunk';

const titleModal = <><div style={{color:'red',textAlign:'center', display:'flex' , justifyContent:'center', gap:10}}>
  <WarningOutlined style={{fontSize:25}} />  XÓA CHI NHÁNH
  </div> </>
const ModalDelete = (props) => {

  const {modalDeleteBranch} = useSelector( state => state.modalReducer);
  const {infoBranch} = useSelector(state => state.dataMapReducer)
  const dispatch = useDispatch();
 
  const handleOk = () => {
    dispatch(deleteBranch(infoBranch._id))
    dispatch({
      type: typeAction.CLOSE_MODAL_DELETE_BRANCH
    })
  };
  const handleCancel = () => {
    dispatch({
      type: typeAction.CLOSE_MODAL_DELETE_BRANCH
    })
  };
  return (
    <>
      <Modal title={titleModal} open={modalDeleteBranch} onOk={handleOk} onCancel={handleCancel}>
        <p style={{fontSize:16}}  >Bạn có muốn xóa địa chỉ: <span style={{fontWeight:600}}>{infoBranch?.nameCN}</span></p>
        <p style={{fontSize:16}}  >Chuyên khoa: <span style={{fontWeight:600}}>{infoBranch?.speciaList}</span></p>
        <p style={{fontSize:16,margin:0}} > <span style={{color:'red'}}>* Lưu ý:</span> sau khi xóa không thể khôi phục chỉ có thể tạo lại !</p>
      </Modal>
    </>
  )
}

export default ModalDelete