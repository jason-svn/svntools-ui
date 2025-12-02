/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoBase = '/svntools-ui';

const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',
  // Only apply basePath/assetPrefix in production (GitHub Pages).
  // During `next dev` we keep the site at `/` to avoid 404s.
  ...(isProd ? { basePath: repoBase, assetPrefix: repoBase } : {})
};

export default nextConfig;
