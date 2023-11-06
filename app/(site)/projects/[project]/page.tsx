import { getProject } from "@/sanity/schemas/sanity-utils";
import { getProjects } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	params: { project: string };
};

function formatDateToMonthDDYYYY(isoDate: string | Date) {
	if (isoDate instanceof Date) {
		// Convert Date object to ISO 8601 date string
		isoDate = isoDate.toISOString();
	}

	const date = new Date(isoDate);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return date.toLocaleDateString(undefined, options);
}

// In your component:

export default async function Project({ params }: Props) {
	const slug = params.project;
	const project = await getProject(slug);
	const projects = await getProjects();
	const projectDate =
		project.date instanceof Date ? project.date : new Date(project.date);
	const formattedDate = formatDateToMonthDDYYYY(projectDate);

	return (
		<div className="pt-20 px-4">
			<header className="sm:text-2xl md:text-5xl lg:text-6xl text-ash">
				<h1 className=" ">{project.name}</h1>
				<h1>{formattedDate}</h1> {/* Display the formatted date */}
			</header>
			<div className="sm:text-2xl md:text-5xl lg:text-6xl text-justify text-gray font-customBold">
				<PortableText value={project.content}></PortableText>
			</div>
			<div className="w-full grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 pt-10 pb-10">
				{Array.isArray(project.gallery) &&
					project.gallery.length > 0 &&
					project.gallery.map((slide, i) => (
						<Image
							key={i}
							src={slide.asset.url}
							alt=""
							width={1000}
							height={1000}
							className="object-cover h-[256px]"
						/>
					))}
			</div>
		</div>
	);
}
