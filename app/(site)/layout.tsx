import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";

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
						className=" font-customBlack sm:text-2xl md:text-5xl lg:text-6xl w-full flex justify-between hover:text-ash">
						<span>A</span>
						<span>Woman</span>
						<span>is</span>
						<span>a</span>
						<span>Field</span>
					</Link>
				</header>
				<main className="min-h-screen">{children}</main>
				{/* <footer className="px-4 py-4 flex flex-col gap-4 justify-between font-customMed leading-relaxed w-full text-black">
					<p className="py-4">
						“Beyond all ideas of right and wrong <br /> there is a field, I will
						be meeting you there.”
					</p>
					<div className="flex flex-row justify-between w-full">
						<p>ScM</p>
						<a href="https://www.instagram.com/_ph.ia/">→</a>
					</div>
				</footer> */}
			</body>
		</html>
	);
}
