"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

type FieldType = {
  name?: string;
  price?: string;
  description?: string;
};

const App: React.FC = () => {
  const router = useRouter();
  const t = useTranslations("product");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      router.push(`/${locale}/product-db`);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label={t("name")}
        name="name"
        rules={[{ required: true, message: t("pleaseInputName") }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("price")}
        name="price"
        rules={[{ required: true, message: t("pleaseInputPrice") }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label={t("description")}
        name="description"
        rules={[{ required: true, message: t("pleaseInputDescription") }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          {tCommon("submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
