import { getProjects } from "@/sanity/schemas/sanity-utils";
import PostComponent from "./components/posts/PostComponent";

export const revalidate = 60;

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="w-screen">
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{projects.map((project) => (
					<PostComponent key={project._id} project={project} />
				))}
			</div>
		</div>
	);
}
