/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button, Spin } from "antd";
import React, { useState } from "react";
import ProjectCard from "../Component/AuthorizedComponent/ProjectCard/ProjectCard";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const {
    data: projectData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("/mockAPI/projectData.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = response.json();
      return jsonData;
    },
  });

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <main className="space-y-5">
      <section className="flex justify-between items-center">
        <div>
          <p className="font-sora text-xl text-[#0E2040] tracking-widest">
            Projects
          </p>
        </div>
        <div>
          <Button
            type="primary"
            size="large"
            className="btn px-5 flex items-center !rounded-2xl"
          >
            Create
          </Button>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 gap-5">
        {projectData.map((card, index) => (
          <ProjectCard key={index} card={card} />
        ))}
      </section>
    </main>
  );
};

export default page;
