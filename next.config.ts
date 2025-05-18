import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	/* config options here */
	experimental: {
		// reactCompiler: true,
	},
	images: {
		unoptimized: true, // disables Next.js optimization
		remotePatterns: [
			{ hostname: 'pbs.twimg.com' },
			{ hostname: 'yt3.googleusercontent.com' },
			{ hostname: 'cdn.prod.website-files.com' },
			{ hostname: 'assets.aceternity.com' },
			{ hostname: 'images.unsplash.com' },
			{ hostname: 'raiyan-portfolio.s3.us-east-1.amazonaws.com' },
			{
				protocol: 'https',
				hostname: 'raiyan-portfolio.s3.us-east-1.amazonaws.com',
			},
		],
	},
};

export default nextConfig;
