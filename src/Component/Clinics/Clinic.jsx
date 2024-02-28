import React, { useState } from "react";
import { Breadcrumb, Input,Space, Table, Tag } from "antd";
import {
  HomeOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ButtonAddNew from '../../Common/Button/ButtonAddNew'
import TableClinic from "../../Common/Table/TableClinic";
import AddBranchModal from "../../Common/Table/AddBranchModal";
import Alert from "../../Common/alert/alertLoading";
import ModalDelete from "../../Common/Modal/ModalDelete";
const Clinic = () => {

  const [isClassActive, setIsClassActive] = useState('Nhi đồng 315')
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
        <div  className='w-1/6 xl:w-1/5 flex flex-col mt-2 item-center p-8 xl:p-6 border-transparent border border-solid border-[#e5eaef]'>
        <ButtonAddNew />
          <ul className="p-0 text-left">
            {
              chuyenkhoa?.map(items => 
              <li onClick={()=>{setIsClassActive(items)}} className={ `list-none px-5 py-3 rounded-md my-3 cursor-pointer hover:bg-[#f6f9fc] ${isClassActive ===items && 'bg-[#f2f6ff]'}`}>{items}</li>)
            }
          </ul>
        </div>
        <div className="w-5/6 xl:w-4/5 p-8 border-[#e5eaef] border border-solid text-left" >
              <Input.Search allowClear placeholder="Nhập tên chi nhánh" style={{width:250}}/>
              <div className="mt-4">
                <TableClinic/>
              </div>
        </div>
      </div>
      <AddBranchModal chuyenKhoa = {chuyenkhoa}/>
      <ModalDelete />
    </div>
  );
};

export default Clinic;
