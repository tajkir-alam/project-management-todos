"use client";
import Image from "next/image";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useRouter } from 'next/navigation'

const Login = () => {
  const { Title } = Typography;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const onFinish = (values) => {
    console.log("Received values:", values);
    const { email, password } = values;
    if (email === "admin@gmail.com" && password === "12345678") {
      console.log("dashboard");
      router.push("/dashboard");
    } else {
      console.log("The credentials you entered it's incorrect");
    }
  };

  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <div className="max-w-[1536px] mx-auto">
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="hidden lg:block">
          <Image
            src="/images/loginImage.png"
            alt="login Image"
            width={560}
            height={760}
            className="mx-auto"
            priority
          />
        </div>
        <div className="px-10 flex justify-center">
          <Form
            name="normal_login"
            className="login-form w-3/4 space-y-10"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Title level={1} className="mb-0 pb-0">
              Welcome Back!
            </Title>
            <Title level={5} className="mt-0 pt-0">
              Let&apos;s login
            </Title>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email"
                className="py-2"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="py-2"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button bg-black text-white py-5 flex items-center justify-center"
                block
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Login;
