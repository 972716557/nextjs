"use client";

import React, { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  // template 每次导航都会重新挂载，所以动画会重新触发
  useEffect(() => {
    // 小延迟确保初始状态被渲染
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0) scale(1)"
          : "translateX(-50px) scale(0.95)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
    </div>
  );
}
