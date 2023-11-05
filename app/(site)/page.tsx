import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="w-screen">
			<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
				{projects.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project._id}
						className=" relative">
						<div className="h-16 absolute flex px-4 items-center text-xl text-gray font-customBlack absolute bottom-0">
							<div className="capitalize hidden">{project.name}</div>
						</div>
						{project.image && (
							<Image
								src={project.image}
								alt={project.name}
								width={1000}
								height={1000}
								className="sm:h-[33vh] md:h-[50vh] lg:h-[50vh] w-fill object-cover md:hover:border-gray lg:hover:border-gray hover:border"
							/>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}
