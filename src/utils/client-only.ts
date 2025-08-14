// import "client-only";
export const clientOnly = () => {
  // 如果使用了Windows或者localStorage等浏览器API，就需要限制只能在客户端运行，添加 client-only 标记
  return "client-only";
};
