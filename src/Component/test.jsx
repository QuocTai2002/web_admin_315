/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Breadcrumb,theme,Statistic,} from 'antd'
import './style.scss'
import MapNhiDong from '../Common/MapNhiDong';
import {  getDataMapNhi, } from '../Redux/request';
import { useSelector } from 'react-redux';



const test = () => {
  const [valueFull, setValueFull] = useState(0);
  const [valuePart, setValuePart] = useState(0);
  const { 
    token: { colorBgContainer },
  } = theme.useToken();
  const {chiNhanh} = useSelector(state => state.dataMapReducer)
  useEffect(()=>{
    getDataMapNhi()
    setvalueNhi();
  },[chiNhanh]);
  const setvalueNhi = () => {
    var values = 0;
    for(const elements in chiNhanh){
      if(chiNhanh[elements].statusFull === true ){
        values += 1;
      }
      
    }
    setValueFull(values)
    setValuePart(chiNhanh?.length - values)
  };
  const addDataTest = () =>{
    // postdatamapNhi(mapNhiDong315)
    // deletedataMap()
  }
  return (
    <>
    <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Danh sách địa chỉ</Breadcrumb.Item>
          <Breadcrumb.Item>Nhi đồng 315</Breadcrumb.Item>
        </Breadcrumb>
        
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <div className='mapNhi_container'>
          
<button type="button" class="button" onClick={()=>{addDataTest()}}>
  <span class="button__text">Thêm chi nhánh</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
<button class="cssbuttons-io">
  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg> Code</span>
</button>
<div style={{display:'flex', gap:30}}>
<Statistic
          title="Tổng Nhi"
          value={chiNhanh?.length}
          valueStyle={{
            color: 'back',
          }}
        />
        <Statistic
          title="Nhi Full"
          value={valueFull}
          valueStyle={{
            color: '#3f8600',
          }}
        />
        <Statistic
          title="Nhi Part"
          value={valuePart}
          valueStyle={{
            color: '#DAB550',
          }}
        />
</div>

          </div>
          <MapNhiDong/>
        </div>
    </>
  )
}

export default test