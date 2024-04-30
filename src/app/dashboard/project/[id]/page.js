"use client";
import React from "react";
import { Input } from "antd";
import TaskColumn from "@/app/Component/AuthorizedComponent/TaskColumn/TaskColumn";

const ProjectDetailPage = ({ params }) => {
  const { Search } = Input;
  // const findProjectTask =
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <main>
      <section className="flex justify-between items-center border-b-2 pb-2 pl-2">
        <div>
          <p className="font-sora text-xl text-[#0E2040] tracking-widest w-full">
            Tasks Overview
          </p>
        </div>
        <div>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
      </section>
      <section className="mt-10 grid lg:grid-cols-3 items-center justify-around gap-5">
        <TaskColumn status='on going' />
        <TaskColumn status='in progress' />
        <TaskColumn status='completed' />
      </section>
    </main>
  );
};

export default ProjectDetailPage;
