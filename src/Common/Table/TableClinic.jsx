import React, { useEffect, useState } from "react";
import { Table, Tag, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getBranch,deleteBranch } from "../../Redux/thunk/branchThunk";
import  * as typeAction from '../../constants/constant'
const TableClinic = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const { chiNhanh } = useSelector((state) => state.dataMapReducer);
  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
  };
  useEffect(() => {
    dispatch(getBranch(keyWord));
  }, []);

  const delateBranchById = (id) =>{
      dispatch(deleteBranch(id))
  }
   const openModalDelete = (items) => {
    dispatch({
      type:typeAction.INFO_BRANCH,
      payload:items
    })
    dispatch({
      type: typeAction.OPEN_MODAL_DELETE_BRANCH
    });

   }
  const columns = [
    {
      title: "Tên chi nhánh",
      dataIndex: "nameCN",
      key: "nameCN",
    },
    {
      title: "SĐT",
      dataIndex: "SDT",
      key: "SDT",
      width: "150px",
    },
    {
      title: "Trạng Thái",
      dataIndex: "statusOpen",
      key: "statusOpen",
      align: "center",
      width: "120px",
      filters: [
        {
          text: "OPEN",
          value: true,
        },
        {
          text: "COMING SOON",
          value: false,
        },
      ],
      filteredValue: filteredInfo.statusOpen || null,
      onFilter: (value, record) =>
        value ? record.statusOpen === true : record.statusOpen === false,
      render: (_, { statusOpen }) => (
        <>
          {statusOpen ? (
            <Tag color="#87d068">OPEN</Tag>
          ) : (
            <Tag color="#f50">COMING SOON</Tag>
          )}
        </>
      ),
      ellipsis: true,
    },
    {
      title: "Loại",
      key: "fullTime",
      dataIndex: "fullTime",
      align: "center",
      width: "120px",
      filters: [
        {
          text: "FULL",
          value: true,
        },
        {
          text: "PART",
          value: false,
        },
      ],
      filteredValue: filteredInfo.fullTime || null,
      onFilter: (value, record) =>
        value ? record.fullTime === true : record.fullTime === false,
      render: (_, { fullTime }) => (
        <>
          {fullTime ? (
            <Tag color="green">FULL</Tag>
          ) : (
            <Tag color="blue">PART</Tag>
          )}
        </>
      ),
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      width: "120px",
      align: "center",
    },
  ];
  return (
    <>
      <Table
        onChange={handleChange}
        columns={columns}
        dataSource={chiNhanh?.map((items) => ({
          nameCN: items.nameCN,
          SDT: items.SDT,
          statusOpen: items.statusOpen,
          fullTime: items.fullTime,
          action: (
            <div className="flex gap-4 justify-center">
              <Tooltip title="Xem" color="blue">
                <EyeOutlined className="text-blue-500 text-lg cursor-pointer" />
              </Tooltip>
              <Tooltip title="Chỉnh sửa" color="green">
                <EditOutlined className="text-green-500 text-lg cursor-pointer" />
              </Tooltip>
              <Tooltip title="Xóa" color="red">
                <DeleteOutlined onClick={()=>{openModalDelete(items)}} className="text-red-500 text-lg cursor-pointer" />
              </Tooltip>
            </div>
          ),
        }))}
      />
    </>
  );
};

export default TableClinic;
