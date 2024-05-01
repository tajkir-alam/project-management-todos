import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import Task from "../Tasks/Task";
import taskStore from "@/app/zustand/store";

const TaskColumn = ({ status }) => {

  const handleAddTask = (statusIs) => {
    const newTask = {
      id: 49,
      projectID: 3,
      taskTitle: `Created Task ${statusIs}`,
      taskDescription: "create Task ..............",
      taskWorker: ["/images/user1.png"],
      status: statusIs,
      deadLines: "12/08/24",
    };
    taskStore.getState().addTask(newTask);
  };

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
          onClick={() => handleAddTask(status)}
        />
      </div>
      <div className="mt-5 p-2 bg-white h-full">
        <Task status={status} />
      </div>
    </div>
  );
};

export default TaskColumn;
