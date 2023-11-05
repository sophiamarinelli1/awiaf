const project = {
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "date",
			title: "Date",
			type: "date",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
		},
		{
			name: "gallery",
			title: "Gallery",
			type: "array",
			of: [{ type: "image" }],
		},
		{
			name: "url",
			title: "URL",
			type: "url",
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default project;
