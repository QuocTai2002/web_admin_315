
import React from "react";
import { Modal } from "antd";

const ModalDetail = ({ selectedBranch, onCloseDetailModal }) => {
  return (
    <Modal
      title="Chi tiết chi nhánh"
      visible={!!selectedBranch}
      onCancel={onCloseDetailModal}
      footer={null}
    >
      {selectedBranch && (
        <div>
          <p style={{fontWeight:600}} >Tên chi nhánh: <span style={{ fontWeight: "normal" }}>{selectedBranch.nameCN}</span></p>
          <p style={{fontWeight:600}} >SĐT: <span style={{ fontWeight: "normal" }}>{selectedBranch.SDT}</span></p>
          <p style={{fontWeight:600}} >Trạng thái: <span style={{ fontWeight: "normal" }}>{selectedBranch.statusOpen ? "OPEN" : "COMING SOON"}</span></p>
          <p style={{fontWeight:600}} >Loại: <span style={{ fontWeight: "normal" }}>{selectedBranch.fullTime ? "FULL" : "PART"}</span></p>
        </div>
      )}
    </Modal>
  );
};

export default ModalDetail;
