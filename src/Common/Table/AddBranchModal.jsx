import React, { useEffect, useState } from "react";
import { Modal, Switch, message } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as typeAction from "../../constants/constant";
import { addNewBranch, getBranch } from "../../Redux/thunk/branchThunk";
import { useRef } from "react";
// TẠO TITLE CHO HEADER MODAL
const title = (
  <h2
    className=" font-serif text-[#5d87ff] text-2xl"
    style={{ borderBottom: "1px solid #5d87ff" }}
  >
    Tạo chi nhánh{" "}
  </h2>
);
const AddBranchModal = (props) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  // USE VALUE MODAL OF STORE REDUX
  const { modalAddBranch } = useSelector((state) => state.modalReducer);
  // OPEN MODAL
  const handleOk = () => {
    dispatch({ type: typeAction.CLOSE_MODAL_ADD_BRANCH });
  };
  // CLOSE MODAL
  const handleCancel = () => {
    dispatch({ type: typeAction.CLOSE_MODAL_ADD_BRANCH });
  };
  // RESET FORM AFTER SUBMIT
  const handleResetForm = () => {
    formRef.current.reset();
  };
  // SET FIELD SELECT
  const handleSlect = (e) => {
    formik.setFieldValue("speciaList", e.target.value);
  };
  // SET FIELD SWITCH
  const handleChangeSwitch = (name) => (values) => {
    return formik.setFieldValue(name, values);
  };
  //khởi tạo formik
  const formik = useFormik({
    initialValues: {
      speciaList: "Nhi đồng 315",
      nameCN: "",
      SDT: "",
      linkMaps: "",
      address: "",
      statusOpen: false,
      fullTime: false,
      timeWork: {
        AM: "",
        PM: "",
      },
      location: {
        Latitude: "",
        Longitude: "",
      },
    },
    onSubmit: async (values) => {
      dispatch(addNewBranch(values));
      handleResetForm();
      message.success("Tạo thành công !");
      handleCancel();
    },
  });
  return (
    <>
      <Modal
        title={title}
        open={modalAddBranch}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={formik.handleSubmit} ref={formRef}>
          <div className="flex flex-col mt-2">
            <label className="font-semibold">Tên Chi Nhánh :</label>
            <input
              id="nameCN"
              name="nameCN"
              onChange={formik.handleChange}
              placeholder="VD: 327 Hoàng Diệu"
              className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                border: "none",
              }}
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-semibold">SĐT :</label>
            <input
              id="SDT"
              name="SDT"
              type="tel"
              onChange={formik.handleChange}
              placeholder="Số điện thoại"
              className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                border: "none",
              }}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-semibold">Địa chỉ :</label>
            <input
              id="address"
              name="address"
              onChange={formik.handleChange}
              placeholder="Địa chỉ chi nhánh"
              className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                border: "none",
              }}
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-semibold">Link google map :</label>
            <input
              id="linkMaps"
              name="linkMaps"
              onChange={formik.handleChange}
              placeholder="link google"
              className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                border: "none",
              }}
              type="text"
            />
          </div>
          <div>
            <ul className="list-none flex pl-0 gap-5">
              <li className="flex flex-col w-1/2">
                <label className="font-semibold" htmlFor="">
                  Latitude
                </label>
                <input
                  id="Latitude"
                  name="location.Latitude"
                  onChange={formik.handleChange}
                  placeholder="Latitude"
                  type="text"
                  className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
                  style={{
                    boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                    border: "none",
                  }}
                />
              </li>
              <li className="flex flex-col w-1/2">
                <label className="font-semibold" htmlFor="">
                  Longitude
                </label>
                <input
                  id="Longitude"
                  name="location.Longitude"
                  onChange={formik.handleChange}
                  placeholder="Longitude"
                  type="text"
                  className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
                  style={{
                    boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                    border: "none",
                  }}
                />
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none flex pl-0 gap-5">
              <li className="flex flex-col w-1/2">
                <label className="font-semibold" htmlFor="">
                  Thời gian sáng{" "}
                  <span className="text-red-500">(Không bắt buột)</span>
                </label>
                <input
                  id="AM"
                  name="timeWork.AM"
                  onChange={formik.handleChange}
                  placeholder="VD: 8:00 - 11:30"
                  type="text"
                  className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
                  style={{
                    boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                    border: "none",
                  }}
                />
              </li>
              <li className="flex flex-col w-1/2">
                <label className="font-semibold" htmlFor="">
                  Thời gian chiều{" "}
                  <span className="text-red-500">(Không bắt buột)</span>
                </label>
                <input
                  id="PM"
                  name="timeWork.PM"
                  onChange={formik.handleChange}
                  placeholder="VD: 13:30 - 20:30"
                  type="text"
                  className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
                  style={{
                    boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                    border: "none",
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="mt-5 text-center">
            <ul className="list-none flex justify-start  pl-0 gap-4">
              <li className="flex flex-col w-1/2">
                <label className="font-semibold text-start">
                  Chuyên khoa :
                </label>
                <select
                  onChange={handleSlect}
                  className="py-1 text-sm rounded-md"
                >
                  {props.chuyenKhoa?.map((item) => (
                    <option value={item}>{item}</option> // LẤY GIÁ TRỊ PROPS =>> CHUYEN KHOA TRUYỀN VÀO TỪ COMPONENT CLINIC
                  ))}
                </select>
              </li>
              <li className="flex flex-col ">
                <label className="font-semibold" htmlFor="">
                  Open :
                </label>
                <Switch onChange={handleChangeSwitch("statusOpen")} />
              </li>
              <li className="flex flex-col ">
                <label className="font-semibold" htmlFor="">
                  Fulltime :
                </label>
                <Switch onChange={handleChangeSwitch("fullTime")} />
              </li>
            </ul>
          </div>

          <div className="justify-end gap-2 mt-5 flex">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm bg-white border hover:border-transparent hover:text-white rounded-lg cursor-pointer px-4 py-1 text-black hover:bg-blue-500"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="text-sm bg-blue-500 border-transparent rounded-lg cursor-pointer px-4 py-1 text-white hover:bg-blue-400"
            >
              Thêm
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddBranchModal;
