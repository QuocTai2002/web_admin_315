import React from "react";
import { useDispatch } from "react-redux";
import * as typeAction from "../../constants/constant";
// import { messageApi } from "../alert/alertLoading";

const ButtonAddNew = () => {
  const dispatch = useDispatch();
  const key = 'updatable';
  const showModalAddBranch = () => {
    dispatch({ type: typeAction.OPEN_MODAL_ADD_BRANCH });
    // openMessage()

  };
  // const openMessage = () => {
  //   messageApi.open({
  //     key,
  //     type: 'loading',
  //     content: 'Loading...',
  //   });
  //   setTimeout(() => {
  //     messageApi.open({
  //       key,
  //       type: 'success',
  //       content: 'Loaded!',
  //       duration: 2,
  //     });
  //   }, 1000);
  // };
  return (
    <>
      <button
        onClick={showModalAddBranch}
        className="rounded-md relative w-full h-10 cursor-pointer flex items-center border-transparent border-[#5d87ff] bg-[#5d87ff] group hover:bg-g[#5d87ff] active:bg-[#5d87ff] active:border-[#5d87ff]"
      >
        <span className="text-[#f2f6ff] font-semibold ml-8 transform group-hover:translate-x-10 transition-all duration-300">
          Thêm mới
        </span>
        <span className="absolute right-0 h-full w-10 rounded-lg bg-[#5d87ff] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
          <svg
            className="svg w-8 text-[#f2f6ff]"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
    </>
  );
};

export default ButtonAddNew;
