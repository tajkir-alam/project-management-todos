"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const DashboardSidebar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  const items = [
    getItem("Dashboard", "1", <PieChartOutlined />),
    getItem("Profile", "2", <DesktopOutlined />),
    getItem("Files", "3", <FileOutlined />),
  ];

  const handleMenuClick = (key) => {
    const selectedItem = items.find((item) => item.key === key);
    console.log(typeof(key));
    if (key === '1') {
      router.push("/dashboard");
      return;
    } else if (selectedItem) {
      router.push(`/dashboard/${selectedItem.label.toLowerCase()}`);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        className="min-h-screen pt-2"
        items={items}
        onSelect={({ key }) => handleMenuClick(key)}
        expandIcon={className="flex justify-center"}
      />
    </Sider>
  );
};

export default DashboardSidebar;
