import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const TaskColumn = ({ status }) => {
  return (
    <div className="shadow min-h-screen">
      <h6 className="bg-white font-sora capitalize text-lg text-[#1c4f55] text-center rounded-t-md py-2 tracking-wider">
        {status}
      </h6>
      <div className="px-4 mt-4">
        <Button
          block
          icon={<PlusOutlined />}
          className="btn bg-transparent border border-dashed border-[#067C89] text-2xl !hover:bg-transparent !focus:bg-transparent"
        />
      </div>
      <div className="mt-5 p-2 h-screen bg-white">
        <div className="bg-[#F0F6FF] p-2 rounded-md">
            sfsdf
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
