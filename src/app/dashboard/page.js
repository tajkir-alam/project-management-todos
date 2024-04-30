import { Button } from "antd";
import React from "react";
import ProjectCard from "../Component/AuthorizedComponent/ProjectCard/ProjectCard";

const page = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        {array.map((card, index) => (
          <ProjectCard key={index} />
        ))}
      </section>
    </main>
  );
};

export default page;
