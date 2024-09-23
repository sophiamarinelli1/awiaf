import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className=" sm:p-4 lg:p-12 flex flex-col gap-4 justify-between font-customMed leading-relaxed w-full text-black">
			<Link
				href="https://sophiamarinelli.com"
				className="flex flex-row justify-between">
				<p className="">© 2024 ScM →</p>
				<p className="">
					“Beyond all ideas of right and wrong there is a field, I will be
					meeting you there.”
				</p>
			</Link>
		</footer>
	);
};

export default Footer;
