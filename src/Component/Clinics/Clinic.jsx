import React, { useState } from "react";
import { Breadcrumb, Input,} from "antd";
import {
  HomeOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ButtonAddNew from '../../Common/Button/ButtonAddNew'
const Clinic = () => {
  const [isClassActive, setIsClassActive] = useState('Nhi đồng')

  const  chuyenkhoa = ['Nhi đồng 315', 'Phụ sản 315', 'Tiêm chủng 315', 'Lão khoa 315', 'Mắt 315']
  const items = [
    {
      title: (
        <Link to="/">
          <HomeOutlined className="text-lg font-semibold" />
        </Link>
      ),
    },
    {
      title: (
        <>
          <OrderedListOutlined className="font-semibold text-[#929dae]" />{" "}
          <span style={{ margin: 0 }} className="font-semibold  text-[#929dae]">
            Chi nhánh
          </span>
        </>
      ),
    },
  ];
  return ( <div className="mx-20" >
      <Breadcrumb items={items} className="text-[#929dae]" />
      <h3 className="m-0 text-[#344767]">Phòng khám</h3>
      <div style={{boxShadow:'rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}} className="bg-white flex text-center mt-5 rounded-lg ">
        <div  className='w-1/6 flex flex-col justify-center item-center p-8 border-transparent border border-solid border-[#e5eaef]'>
          <ButtonAddNew />
          <ul className="p-0 text-left">
            {
              chuyenkhoa?.map(items => 
              <li onClick={()=>{setIsClassActive(items)}} className={ `list-none px-5 py-3 rounded-md my-3 cursor-pointer hover:bg-[#f6f9fc] ${isClassActive ===items && 'bg-[#f2f6ff]'}`}>{items}</li>)
            }
          </ul>
        </div>
        <div className="w-5/6 p-8 border-[#e5eaef] border border-solid text-left" >
              <Input.Search allowClear style={{width:250}}/>
              <div>

              </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
