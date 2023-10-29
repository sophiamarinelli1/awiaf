import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "A Woman is a Field",
	description: "Blog of sorts",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="font-customBlack text-gray bg-white">
				<div className="fixed pointer-events-none w-screen h-screen animate-pulse backdrop-blur-lg z-50"></div>
				<header className="fixed z-50">
					<Link
						href="/"
						className="font-customBlack sm:text-4xl md:text-6xl lg:text-6xl w-screen flex justify-between hover:text-black">
						<span>A</span>
						<span>Woman</span>
						<span>is</span>
						<span>a</span>
						<span>Field</span>
					</Link>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
