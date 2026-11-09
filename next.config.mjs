/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === 'true' ? '/Second-light' : '',
  images: { unoptimized: true },
};
export default nextConfig;
