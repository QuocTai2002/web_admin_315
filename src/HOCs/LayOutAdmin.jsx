import React, { useState } from "react";
import "./style.scss";
import {
  OrderedListOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate} from "react-router-dom";
// import logoNhiDong315 from '../../public/images/logo315.png'
const { Header, Content,Sider } = Layout;
const items = [
  {
    key: "1",
    label: (
      <>
        <h2 style={{ color: "white", textAlign: "center", transform:'translateX(-10px)' }}>IT 315</h2>
      </>
    ),
    icon: <> 
    <div style={{width:40,height:40, display:'flex', justifyContent:'center', alignItems:'center', transform:'translateX(-10px)'}}>
    <img style={{width:'100%'}} src='https://static.ladipage.net/5aa6273ea81f66ca2eacc40b/z3224820945183_a275c59effa3fe08b33cefff65cf4844-20220315094641.png' alt="Logo Nhi Đồng 315 " />
    </div>
      
     </>,
    disabled: true,
  },
  {
    key: "/",
    icon: <UsergroupAddOutlined />,
    label: "Người dùng",
  },
  {
    key: "children",
    icon: <OrderedListOutlined />,
    label: "Chi nhánh",
    children: [
      {
        key: "/branch/clinic",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
      ,
        label: "Phòng khám",
      },
      {
        key: "/user",
        icon: <SmileOutlined />,
        label: "Chuyên Khoa",
      },
      {
        key: "/user11",
        icon: <SmileOutlined />,
        label: "Địa chỉ",
      },
    ],
  },
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "Phân quyền",
  },
];

const LayOutAdmin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={["/"]}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
      </Sider>
      <Layout className="bg-[#f0f2f5]">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="header_container">
            <div className="image">
              <h3 style={{ margin: 0 }} >Hi, Tài Nguyễn</h3>
              <img
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
                alt="#"
              />
            </div>

            <button>Đăng xuất</button>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
            padding:'50px'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayOutAdmin;
