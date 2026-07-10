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
    config.plugins.push(
      new nextWebpack.DefinePlugin({
        "import.meta.env.VITE_FRONTEND_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_FRONTEND_URL
        ),
        "import.meta.env.VITE_FORMSPREE_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_FORMSPREE_URL
        ),
        "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_API_BASE_URL
        ),
      })
    );

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