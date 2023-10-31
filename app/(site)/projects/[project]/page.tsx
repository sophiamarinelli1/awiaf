import { getProject } from "@/sanity/schemas/sanity-utils";
import { getProjects } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	params: { project: string };
};

export default async function Project({ params }: Props) {
	const slug = params.project;
	const project = await getProject(slug);
	const projects = await getProjects();

	return (
		<div className="">
			<div className="relative w-screen h-screen z font-customBlack">
				<div className="absolute pt-20 z-30 w-screen h-screen overflow-scroll">
					<header className="flex sm:flex-col md:flex-row lg:flex-row  sm:text-2xl md:text-5xl lg:text-6xl justify-between ">
						<h1 className="text-ash">{project.name}</h1>
					</header>
					<div className="sm:text-2xl md:text-5xl lg:text-6xl text-justify text-gray font-customBold">
						<PortableText value={project.content}></PortableText>
					</div>
				</div>
				<div className="absolute w-full h-full object-cover bg-cream z-20 opacity-90 mix-blend-screen"></div>
				{project.image && (
					<Image
						src={project.image}
						alt={project.name}
						width={1000}
						height={1000}
						className="absolute w-full h-full object-cover"
					/>
				)}
			</div>
		</div>
	);
}
