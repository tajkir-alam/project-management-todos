import taskStore from "@/app/zustand/store";
import React, { useEffect } from "react";
import {
  FieldTimeOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Tooltip } from "antd";

const Task = ({ projectID, status, searchQuery }) => {
  const fetchTask = taskStore((state) => state.fetchTask);
  const tasks = taskStore((state) => state.tasks);
  const setDraggedTask = taskStore((store) => store.setDraggedTask);

  const filterProjectID = tasks.filter((task) => task.projectID == projectID);
  const filterTasks = filterProjectID.filter((task) => {
    const statusMatch = task.status === status;
    const titleMatch =
      !searchQuery ||
      task.taskTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && titleMatch;
  });

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return filterTasks.map((task, index) => (
    <div
      key={index}
      className="bg-[#F0F6FF] p-3 rounded-md mt-2 mb-4 cursor-move"
      draggable
      onDragStart={() => {
        setDraggedTask(task.id);
      }}
    >
      <div className="flex justify-between items-center">
        <h6 className="text-lg font-sora tracking-wider text-[#383636]">
          {task.taskTitle}
        </h6>
        <div className="flex items-center gap-1 text-red-800">
          <FieldTimeOutlined className="text-lg" />
          <p className="text-xs">{task.deadLines}</p>
        </div>
      </div>
      <p className="text-sm text-[#5c5959] mt-4">
        {task.taskDescription} Lorem ipsum dolor sit amet.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2 cursor-pointer">
          {task.taskWorker.map((workerImg, index) => (
            <Tooltip key={index} title={`Tajkir - ${index + 1}`}>
              <Image
                src={workerImg}
                alt="project member"
                width={20}
                height={20}
                className="rounded-full"
              />
            </Tooltip>
          ))}
        </div>
        <div className="space-x-3">
          <button className="btn">
            <Tooltip title="View Project Details">
              <EyeOutlined className="text-blue-800 text-lg" />
            </Tooltip>
          </button>
          <button className="btn">
            <EditOutlined className="text-green-500 text-lg" />
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Task;
