import React, { useEffect, useState } from "react";
import { Select, Modal, Switch } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as typeAction from "../../constants/constant";
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
  const { modalAddBranch } = useSelector((state) => state.modalReducer);
  const handleOk = () => {
    dispatch({ type: typeAction.CLOSE_MODAL_ADD_BRANCH });
  };
  const handleCancel = () => {
    dispatch({ type: typeAction.CLOSE_MODAL_ADD_BRANCH });
  };

  //khởi tạo formik
  const formik = useFormik({
    initialValues: {
      speciaList: "",
      nameCN: "",
      SDT: "",
      linkMaps: "",
      address: "",
      statusOpen: "",
      fullTime: "",
      timeWork: Object,
      location: Object,
    },
    onSubmit: (values) => {
      console.log(values);
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
        <form action="">
          <div className="flex flex-col mt-2">
            <label className="font-semibold">Tên Chi Nhánh :</label>
            <input
              placeholder="Tên chi nhánh"
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
              placeholder="Tên chi nhánh"
              className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                border: "none",
              }}
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-semibold">Địa chỉ :</label>
            <input
              placeholder="Tên chi nhánh"
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
              placeholder="Tên chi nhánh"
              className=" border-transparent focus:outline-none mt-2 py-2 px-2 text-sm rounded-md"
              style={{
                boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.5)",
                border: "none",
              }}
              type="text"
            />
          </div>
          <div className="mt-5 text-center flex flex-nowrap">
            <Select
              labelInValue
              style={{ width: 140 }}
              defaultValue={{
                value: "Nhi đồng 315",
              }}
              options={props.chuyenKhoa?.map((item) => ({
                value: item,
                label: item,
              }))}
            />
            <ul className="list-none">
              <li>
                <label htmlFor="">Coming soon</label>
                <Switch />
              </li>
              <li>
                <label htmlFor="">Fulltime</label>
                <Switch />
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
            <button className="text-sm bg-blue-500 border-transparent rounded-lg cursor-pointer px-4 py-1 text-white hover:bg-blue-400">
              Thêm
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddBranchModal;
