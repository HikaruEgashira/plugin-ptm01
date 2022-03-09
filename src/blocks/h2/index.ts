import type { BlockConfiguration } from "@wordpress/blocks";

import { register } from "../helper";
import "../tailwind.css";

import edit from "./edit";
import save from "./save";

export type Attribute = {
	title: string;
};

const config: BlockConfiguration<Attribute> = {
	title: "h2",
	description: "heading 1",
	category: "lp",
	icon: "smiley",
	supports: {},
	attributes: {
		title: {
			type: "string",
		},
	},
	example: {
		attributes: {
			title: "Bonjour, monde",
		},
	},
	edit,
	save,
};

register(config);
