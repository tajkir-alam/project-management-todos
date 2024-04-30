import taskStore from "@/app/zustand/store";
import React, { useEffect } from "react";

const Task = ({ status }) => {
  const fetchTask = taskStore((state) => state.fetchTask);
  const tasks = taskStore((state) => state.tasks);
  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  const filterTasks = tasks.filter((task) => task.status == status);

  console.log(filterTasks);

  return (
    <div>
      {filterTasks.map((task, index) => (
        <p key={index}>{task.taskTitle}</p>
      ))}
    </div>
  );
};

export default Task;
