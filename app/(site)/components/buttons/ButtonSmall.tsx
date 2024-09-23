import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	href: string;
}

const ButtonSmall = ({ title = "", href = "" }: Props) => {
	return (
		<Link href={href}>
			<button className="border rounded-sm fixed sm:top-4 lg:top-12 sm:left-4 lg:left-12 px-4 py-2  font-customBold text-note hover:border-pink hover:bg-pink">
				{title}
			</button>
		</Link>
	);
};

export default ButtonSmall;
