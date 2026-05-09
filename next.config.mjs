/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT === "export";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
