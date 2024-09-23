import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header className=" fixed pointer-events-none top-0 z-50 mix-blend-difference hover:mix-blend-multiply px-4 w-full">
			<Link
				href="/"
				className="text-pink font-customBlack sm:text-6xl md:text-6xl lg:text-7xl w-full text-center flex justify-center items-center h-screen hover:text-ash animate-pulse">
				A Woman <br /> is a Field
			</Link>
		</header>
	);
};

export default Navbar;
