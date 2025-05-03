import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
//   images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "enqcode.com",
//         },
//   ],
// };
  images: { unoptimized: true }
};

export default nextConfig;
