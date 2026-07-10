import envPkg from "@next/env";
const { loadEnvConfig } = envPkg;

loadEnvConfig(process.cwd());

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { webpack: nextWebpack }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|ttf|woff2?)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash:8][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;