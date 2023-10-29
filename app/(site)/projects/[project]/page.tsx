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
			<div className="justify-items-center w-screen">
				<div className="w-full font-customBold">
					{projects.map((project) => (
						<Link
							href={`/projects/${project.slug}`}
							key={project._id}
							className="flex md:flex-row lg:flex-row sm:border-b-2 justify-between w-full lg:hover:text-black lg:hover:border-b-2 lg:hover:border-black items-center ">
							<div className="flex sm:flex-col md:flex-row lg:flex-row sm:w-4/6 lg:w-1/2 h-full align-center pl-2">
								<div className="w-3/6 capitalize">{project.name}</div>
							</div>
							{project.image ? (
								<Image
									src={project.image}
									alt={project.name}
									width={1000}
									height={1000}
									className="sm:w-32 md:w-32 lg:w-32 sm:h-32 md:h-32 lg:h-32 object-cover"
								/>
							) : (
								<div className="sm:w-full md:w-16 lg:w-16 sm:h-fill md:h-16 lg:h-16	 bg-red"></div>
							)}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
