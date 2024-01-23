import React, {useRef, useEffect, useState } from "react";
import {  Table, Tag, Tooltip, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./style.scss";
import { getDataMapNhi, openModalDelete } from "../Redux/request";
import { useDispatch, useSelector } from "react-redux";
import ModalDelete from "./Modal/ModalDelete";
import { Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const MapNhiDong = () => {
  const dispatch = useDispatch();
  const { chiNhanh } = useSelector((state) => state.dataMapReducer);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [contentModal, setContentModal] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleChange = ( filters) => {
    setFilteredInfo(filters);
    // console.log(filteredInfo);
    // setSortedInfo(sorter);
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Tìm kím chi nhánh`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Tìm
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Xóa
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Đóng
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
  {
    title: "STT",
    dataIndex: "STT",
    width: 70,
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    width: 450,
    ...getColumnSearchProps('address'),
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "number",
    width: 160,
  },

  {
    title: "Trạng thái",
    dataIndex: "status",
    filters: [
        {
          text: 'OPEN',
          value: true,
        },
        {
          text: 'COMING SOON',
          value: false,
        },
      ],
    width: 160,
    render: (_, { status }) => (
      <>
        {status ? (
          <Tag color="error">COMING SOON</Tag>
        ) : (
          <Tag color="success">OPEN</Tag>
        )}
      </>
    ),
    // filteredValue: filteredInfo.status || null,
    onFilter: (value, record) =>  {
      if(value){
        return record.status === false
      }else{
        return record.status === true
      }
    },
      
  },
  {
    title: "Thời gian làm việc",
    dataIndex: "loaiTime",
       filters: [
      {
        text: 'FULL',
        value: true,
      },
      {
        text: 'PART TIME',
        value: false,
      },
    ],

    render: (_, { loaiTime, timeSang, timeChieu }) => (
      <>
        {loaiTime ? (
          <div>
            {" "}
            <Tag color="success">FULL </Tag>
            <div>
              <p style={{ margin: 0 }}>
                T2-CN: {timeSang} và {timeChieu}
              </p>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Tag color="warning">PART TIME</Tag>
            <p style={{ margin: 0 }}>T2-T6: {timeSang}</p>
            <p style={{ margin: 0 }}>T7-CN: {timeChieu}</p>{" "}
          </>
        )}
      </>
    ),
    onFilter: (value, record) =>  {
      if(value){
        return record.loaiTime === true
      }else{
        return record.loaiTime === false
      }
    }
  },
  {
    title: "Hành Động",
    dataIndex: "hanhDong",
    width: 130,
  },
];
  useEffect(() => {
    dispatch(getDataMapNhi(1));
  }, []);
  return (
    <>
      <Table
      onChange={handleChange}
        scroll={{
          y: 500,
        }}
        columns={columns}
        dataSource={chiNhanh?.map((items) => ({
          key: items.maPhongKHam,
          STT: items.maPhongKHam.match(/\d/g),
          number: items.SDT,
          address: items.diaChi,
          status: items.comingSoon,
          timeSang: items.gioLamViecSang,
          timeChieu: items.gioLamViecChieu,
          loaiTime: items.statusFull,
          hanhDong: (
            <>
              <ul className="container_action">
                <li>
                  <Tooltip color="red" title="Xóa">
                    <DeleteOutlined
                      onClick={() => {
                        dispatch(openModalDelete);
                        setContentModal(items.diaChi)
                      }}
                      style={{ color: "red" }}
                    />
                  </Tooltip>{" "}
                </li>
                <li>
                  <Tooltip color="green" title="Chỉnh sửa">
                    {" "}
                    <EditOutlined
                      onClick={() => {
                        dispatch(openModalDelete);
                      }}
                      style={{ color: "green" }}
                    />
                  </Tooltip>
                </li>
              </ul>{" "}
            </>
          ),
        }))}
      />
      <ModalDelete title={contentModal} />
    </>
  );
};

export default MapNhiDong;
