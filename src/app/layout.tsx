import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans_Extra_Condensed } from "next/font/google";

const firaCondensed = Fira_Sans_Extra_Condensed({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Kush's Portfolio",
	description: "Kush Daga - Welcome to my world.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={firaCondensed.className}>{children}</body>
		</html>
	);
}
