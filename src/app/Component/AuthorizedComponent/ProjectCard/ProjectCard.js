import React from "react";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center border-b pb-2 px-1 border-[#0E2040]">
        <p className="text-xl font-semibold font-sora tracking-wider">
          POS Software {/* title */}
        </p>
        <div className="space-x-3">
          <button className="btn">
            <EyeOutlined className="text-blue-800 text-lg" />
          </button>
          <button className="btn">
            <EditOutlined className="text-green-500 text-lg" />
          </button>
          <button className="btn">
            <DeleteOutlined className="text-red-500 text-lg" />
          </button>
        </div>
      </div>
      <p className="mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aut
        voluptas, ut velit quas iusto, dicta nam praesentium quaerat nihil nisi
        quos aspernatur. A blanditiis velit <span className="text-slate-500 cursor-pointer">see more...</span>
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1 text-red-400">
          <FieldTimeOutlined className="text-lg" />
          <span className="text-sm">29:43</span>
        </div>
        <div className="flex -space-x-2 justify-end">
          <Image
            src={"/images/user1.png"}
            alt="project member"
            width={25}
            height={25}
            className="rounded-full"
          />
          <Image
            src={"/images/user2.png"}
            alt="project member"
            width={25}
            height={25}
            className="rounded-full"
          />
          <Image
            src={"/images/user3.png"}
            alt="project member"
            width={25}
            height={25}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
