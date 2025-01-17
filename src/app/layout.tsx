import "./globals.css";

import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE
	},
	description: APP_DESCRIPTION,
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE
		// startUpImage: [],
	},
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE
		},
		description: APP_DESCRIPTION
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE
		},
		description: APP_DESCRIPTION
	}
};

// export function generateViewport(): Viewport {
// 	return {
// 		themeColor: "black"
// 	};
// }

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={inter.className}>{children}</body>
	</html>
);

export default RootLayout;
