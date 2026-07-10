import { loadEnvConfig } from "@next/env";
import webpack from "webpack";

// Explicitly load env variables from .env files so Webpack's DefinePlugin has access to them
loadEnvConfig(process.cwd());

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { webpack: nextWebpack }) => {
    // 1. Map import.meta.env.VITE_* variables to process.env in Next.js client-side bundle
    config.plugins.push(
      new nextWebpack.DefinePlugin({
        "import.meta.env.VITE_FRONTEND_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_FRONTEND_URL ||
            process.env.VITE_FRONTEND_URL ||
            "https://platform.garagesaarthi.com"
        ),
        "import.meta.env.VITE_FORMSPREE_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_FORMSPREE_URL ||
            process.env.VITE_FORMSPREE_URL ||
            "https://formspree.io/f/mdkaowld"
        ),
        "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_API_BASE_URL ||
            process.env.VITE_API_BASE_URL ||
            "https://api.garagesaarthi.com"
        ),
      })
    );

    // 2. Load static assets as URL strings matching Vite's behavior
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
