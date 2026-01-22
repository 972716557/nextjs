"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const App: React.FC = () => {
  const router = useRouter();
  const t = useTranslations("login");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="flex justify-center mt-20 h-screen">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          username: "admin",
          password: "123123",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={t("username")}
          name="username"
          rules={[{ required: true, message: t("pleaseInputUsername") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label={t("password")}
          name="password"
          rules={[{ required: true, message: t("pleaseInputPassword") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            {tCommon("submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
