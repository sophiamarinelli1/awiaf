import { getProject } from "@/sanity/schemas/sanity-utils";
import { getProjects } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import PostHeader from "../../components/posts/PostHeader";
import ButtonSmall from "../../components/buttons/ButtonSmall";

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
		<div className="">
			<ButtonSmall title="Back" href="/" />
			<PostHeader project={project} />
			<h1 className="sm:text-body lg:text-2xl sm:px-4 lg:px-12 ">
				{formattedDate}
			</h1>
			<div className={richTextStyles}>
				<PortableText value={project.content}></PortableText>
			</div>
		</div>
	);
}

const richTextStyles = `
sm:text-body
lg:text-2xl
sm:p-4
lg:p-12
text-justify
text-pink
font-customBold
w-full
h-full
prose-heading:text-2xl
flex
flex-col
gap-6
`;
