import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { UserOutlined } from "@ant-design/icons";
import {  useNavigate } from "react-router-dom";
import { getLoginInfo } from "../../Redux/thunk/userThunk";
import Loading from "../../Common/loading/Loading";
const Login = () => {
  const {loadingPage} = useSelector(state => state.modalReducer)
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getLoginInfo(loginInfo,navigate))
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  return (
    <>
      <div className={styles.background_container}>
        <div className={styles.bg}>
          <div className={styles.form_login}>
            <div className={styles.icon}>
              <UserOutlined className="bg-blue-400 text-white text-4xl rounded-full p-5 leading-5 " />
              <h2>Sign in</h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3  w-80 "
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 duration-300 cursor-pointer "
              >
                Login
              </button>
              <p>*Note: nếu chưa có account liên hệ IT 315</p>
            </form>
          </div>
        </div>
      </div>
      {loadingPage ? <Loading/> :''}
      
    </>
  );
};

export default Login;
