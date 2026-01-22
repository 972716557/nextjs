"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Select } from "antd";

export default function LanguageSwitch() {
  const locale = useLocale();
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    // 替换 URL 中的 locale 部分
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      style={{ width: 100 }}
      options={[
        { value: "zh", label: t("chinese") },
        { value: "en", label: t("english") },
      ]}
    />
  );
}
