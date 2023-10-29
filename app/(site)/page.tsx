import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="w-screen">
			<div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-customMed">
				{projects.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project._id}
						className="relative sm:text-opacity-100 md:text-opacity-0 lg:text-opacity-0 md:hover:text-opacity-100 lg:hover:text-opacity-100 text-gray leading-tight">
						<div className="px-2 absolute flex flex-row justify-between w-full text-2xl bottom-0">
							<div className="font-customBold">{project.name}</div>
						</div>
						{project.image ? (
							<Image
								src={project.image}
								alt={project.name}
								width={1000}
								height={1000}
								className="w-full h-[512px] object-cover sm:hover-opacity-100 md:hover:opacity-0 lg:hover:opacity-0"
							/>
						) : (
							<div className="sm:w-full md:w-full lg:w-2/6 sm:h-[256px] md:h-fill lg:h-fill bg-green"></div>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}
