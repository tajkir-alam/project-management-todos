import taskStore from "@/app/zustand/store";
import React, { useEffect, useState } from "react";
import {
  FieldTimeOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Tooltip, Button, Form, Modal, Input, DatePicker, Select } from "antd";

const Task = ({ projectID, status, searchQuery }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkers, setSelectedWorkers] = useState([]);
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

  const handleWorkerChange = (selectedOptions) => {
    setSelectedWorkers(selectedOptions);
  };

  const onFinish = (values) => {
    console.log(values);
  };

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
          <button onClick={() => setIsModalOpen(!isModalOpen)} className="btn">
            <EditOutlined className="text-green-500 text-lg" />
          </button>
          <Modal
            title="Add Task"
            open={isModalOpen}
            footer={[
              <Button
                key="addTask"
                type="primary"
                onClick={() => form.submit()}
              >
                Add Task
              </Button>,
              <Button key="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>,
            ]}
          >
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="taskTitle"
                label="Task Title"
                rules={[{ required: true, message: "Please enter task title" }]}
              >
                <Input defaultValue={task.taskTitle} />
              </Form.Item>
              <Form.Item
                name="taskDescription"
                label="Task Description"
                rules={[
                  { required: true, message: "Please enter task description" },
                ]}
              >
                <Input.TextArea defaultValue={task.taskDescription} />
              </Form.Item>
              <Form.Item
                name="taskWorker"
                label="Task Worker"
                rules={[
                  { required: true, message: "Please select task workers" },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Select task workers"
                  onChange={handleWorkerChange}
                >
                  <Option value="user1">User 1</Option>
                  <Option value="user2">User 2</Option>
                  <Option value="user3">User 3</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="deadlines"
                label="Deadline"
                rules={[{ required: true, message: "Please select deadline" }]}
              >
                <DatePicker format="DD/MM/YY" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  ));
};

export default Task;
