import { PortableTextBlock } from "sanity";

export type Project = {
	_id: string;
	_createdAt: Date;
	name: string;
	slug: string;
	date: Date;
	image: string;
	url: string;
	gallery: Array<{ asset: { url: string } }>;
	content: PortableTextBlock[];
};
