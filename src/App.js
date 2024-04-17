import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LayOutAdmin from './HOCs/LayOutAdmin';
import {routes} from './app/Routes'
import Login from './Component/logins/Login';
import React from "react";
import { Navigate } from "react-router-dom";
import Clinic from './Component/Clinics/Clinic';

// HOC kiểm tra trạng thái đăng nhập
const RequireAuth = ({ children }) => {
  // Kiểm tra trạng thái đăng nhập ở đây
  const isAuthenticated = localStorage.getItem("access_Token");

  // Nếu đã đăng nhập, hiển thị children (trang admin), ngược lại chuyển hướng đến trang đăng nhập
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// Component App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route cho trang đăng nhập */}
        <Route path="/" element={<Login />} />
        <Route path="/branch/clinic" element={<RequireAuth><Clinic /></RequireAuth>} />
        {/* Route cho trang admin */}
        <Route path="/admin/*" element={<RequireAuth><LayOutAdmin /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;