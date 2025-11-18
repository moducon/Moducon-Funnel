/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
module.exports = nextConfig;

pages/index.js (just redirects / to /index.html in public)

// pages/index.js
export default function Home() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/index.html',
      permanent: false,
    },
  };
}
