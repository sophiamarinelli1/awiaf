import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/Project";

interface Props {
	project: Project;
}

const PostComponent = ({ project }: Props) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			key={project._id}
			className="relative">
			{/* <div className=" absolute mx-auto">
				<p className="uppercase absolute  font-customSerif text-cream">
					{project.name}
				</p>
			</div> */}
			{project.image && (
				<Image
					src={project.image}
					alt={project.name}
					width={1000}
					height={1000}
					className="sm:h-[50vh] md:h-[50vh] lg:h-[50vh] w-fill object-cover md:hover:border-black lg:hover:border-black hover:border"
				/>
			)}
		</Link>
	);
};

export default PostComponent;
