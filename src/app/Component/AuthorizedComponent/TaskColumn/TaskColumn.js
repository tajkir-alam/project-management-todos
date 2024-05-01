import { Button, Form, Modal, Input, DatePicker, Select } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Task from "../Tasks/Task";
import taskStore from "@/app/zustand/store";
import moment from "moment";

const TaskColumn = ({ projectID, status, searchQuery }) => {
  const date = Date.now();
  const { Option } = Select;
  const [form] = Form.useForm();
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [drop, setDrop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const draggedTask = taskStore((store) => store.draggedTask);
  const moveTask = taskStore((store) => store.moveTask);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleWorkerChange = (selectedOptions) => {
    setSelectedWorkers(selectedOptions);
  };
  const onFinish = (values) => {
    setIsModalOpen(false);
    const imagePaths = selectedWorkers.map((user) => `/images/${user}.png`);
    const formattedDeadline = moment(values.deadlines).format("DD/MM/YY");
    const formData = {
      ...values,
      id: date,
      projectID: parseInt(projectID),
      deadLines: formattedDeadline,
      taskWorker: imagePaths,
      status
    };
    taskStore.getState().addTask(formData);
    console.log(formData);
  };

  return (
    <div
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, status);
      }}
      className="shadow pb-10 overflow-hidden rounded-lg"
    >
      <h6 className="bg-white font-sora capitalize text-lg text-[#1c4f55] text-center py-2 tracking-wider">
        {status}
      </h6>
      <div className="px-4 mt-4">
        <Button
          block
          icon={<PlusOutlined />}
          className="btn bg-transparent border border-dashed border-[#067C89] text-2xl !hover:bg-transparent !focus:bg-transparent"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <Modal
          title="Add Task"
          open={isModalOpen}
          footer={[
            <Button key="addTask" type="primary" onClick={() => form.submit()}>
              Add Task
            </Button>,
            <Button key="cancel" onClick={handleCancel}>
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
              <Input />
            </Form.Item>
            <Form.Item
              name="taskDescription"
              label="Task Description"
              rules={[
                { required: true, message: "Please enter task description" },
              ]}
            >
              <Input.TextArea />
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
      <div className="mt-5 p-2 bg-white h-full">
        <Task projectID={projectID} status={status} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default TaskColumn;
