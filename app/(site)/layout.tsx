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
			<body className="font-customBlack text-black bg-white">
				<div className="fixed pointer-events-none w-screen h-screen animate-pulse sm:backdrop-blur-sm lg:backdrop-blur-lg z-50"></div>
				<header className="fixed z-50 mix-blend-difference hover:mix-blend-multiply px-4 w-full">
					<Link
						href="/"
						className=" font-customBlack sm:text-3xl md:text-5xl lg:text-6xl w-full flex justify-between hover:text-ash">
						<span>A</span>
						<span>Woman</span>
						<span>is</span>
						<span>a</span>
						<span>Field</span>
					</Link>
				</header>
				<main className="">{children}</main>
				<footer className="px-4 py-4 flex flex-row justify-between w-full text-black ">
					<p className="">ScM</p>
					<p>2023</p>
				</footer>
			</body>
		</html>
	);
}
