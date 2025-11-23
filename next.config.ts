import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  typedRoutes: true,
  // 配置图片优化
  images: {
    // 如果需要使用外部图片，可以在这里配置允许的域名
    // domains: ['example.com'],
  },
  // 配置环境变量
  env: {
    // 在这里可以添加环境变量
  },
};

export default nextConfig;
