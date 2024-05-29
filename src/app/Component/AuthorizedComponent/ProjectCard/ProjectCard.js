import React from "react";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Tooltip } from 'antd';
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ card }) => {
  const { id, title, description, team_worker } = card;

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center border-b pb-2 px-1 border-[#0E2040]">
        <p className="text-xl font-semibold font-sora tracking-wider">
          {title}
        </p>
        <div className="space-x-3">
          <Link href={`/dashboard/project/${id}`} className="btn">
            <Tooltip title="View Project Details">
              <EyeOutlined className="text-blue-800 text-lg" />
            </Tooltip>
          </Link>
          <button className="btn">
            <EditOutlined className="text-green-500 text-lg" />
          </button>
          <button className="btn">
            <DeleteOutlined className="text-red-500 text-lg" />
          </button>
        </div>
      </div>
      <p className="mt-6">
        {description}
        <Link
          href={`/dashboard/project/${id}`}
          className="text-slate-500 cursor-pointer"
        >
          <br />
          see more...
        </Link>
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1 text-red-400">
          <FieldTimeOutlined className="text-lg" />
          <span className="text-sm">{currentTime}</span>
        </div>
        <div className="flex -space-x-2 justify-end">
          {team_worker.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="project member"
              width={25}
              height={25}
              className="rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
