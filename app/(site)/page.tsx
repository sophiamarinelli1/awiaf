import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateString) {
	const options = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	};
	const formattedDate = new Date(dateString).toLocaleDateString(
		"en-US",
		options
	);
	return formattedDate;
}

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
						<div className="px-2 absolute flex flex-row justify-between w-full text-xl bottom-0">
							<div className="font-customBold">{project.name}</div>
							<div className="font-customBold">
								{formatDate(project._createdAt)}
							</div>
						</div>
						{project.image ? (
							<Image
								src={project.image}
								alt={project.name}
								width={1000}
								height={1000}
								className="w-full h-[512px] object-cover hover:opacity-0"
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
