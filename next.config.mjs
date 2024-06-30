/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
	swSrc: "src/app/sw.ts",
	swDest: "public/sw.js",
	additionalPrecacheEntries: [{ url: "/~offline", revision }]
});

const nextConfig = {};

export default withSerwist(nextConfig);
