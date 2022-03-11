import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import view from "./view";

export type Attribute = {};

const config: BlockConfiguration<Attribute> = {
	title: "mainvisual",
	description: "mainvisual",
	category: "design",
	icon: "smiley",
	supports: {
		multiple: false,
		reusable: false,
	},
	attributes: {},
	example: {},
	edit: view,
	save: view,
};

register(config);
