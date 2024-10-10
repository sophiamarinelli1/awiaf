import { Project } from "@/types/Project";
import React from "react";
import ButtonSmall from "../buttons/ButtonSmall";
import Image from "next/image";
import Link from "next/link";

interface Props {
	project: Project;
}

const PostHeader = ({ project }: Props) => {
	return (
		<div className="text-pink w-full h-screen text-center flex flex-col justify-center items-center">
			<h1 className="sm:text-6xl lg:text-7xl">{project.name}</h1>
			<Link href="/">
				<Image
					src={project.image}
					alt={project.name}
					width={1000}
					height={1000}
					className="fixed left-0 top-0 sm:h-24 lg:h-48 sm:w-24 lg:w-48 mix-blend-luminosity"
				/>
			</Link>
		</div>
	);
};

export default PostHeader;
