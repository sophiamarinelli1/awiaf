import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
	projectId: "3sz4u3a7",
	dataset: "production",
	title: "Blog",
	apiVersion: "2023-10-25",
	basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: { types: schemas },
});

export default config;
