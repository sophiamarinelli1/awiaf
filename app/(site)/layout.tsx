import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import Footer from "./components/Footer";
import BlurEffect from "./components/BlurEffect";
import Navbar from "./components/Navbar";

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
			<body className="font-customBlack text-black bg-white ">
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
