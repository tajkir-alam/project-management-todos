import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import Task from "../Tasks/Task";

const TaskColumn = ({ status }) => {
  return (
    <div className="shadow pb-10 overflow-hidden rounded-lg">
      <h6 className="bg-white font-sora capitalize text-lg text-[#1c4f55] text-center py-2 tracking-wider">
        {status}
      </h6>
      <div className="px-4 mt-4">
        <Button
          block
          icon={<PlusOutlined />}
          className="btn bg-transparent border border-dashed border-[#067C89] text-2xl !hover:bg-transparent !focus:bg-transparent"
        />
      </div>
      <div className="mt-5 p-2 bg-white h-full">
        <Task status={status} />
      </div>
    </div>
  );
};

export default TaskColumn;
