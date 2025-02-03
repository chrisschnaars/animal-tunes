/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './build', // Changes the build output directory to `./build`.
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  }
   
  export default nextConfig