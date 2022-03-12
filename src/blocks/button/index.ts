import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";
import save from "./save";

export type Attribute = {
	title: string;
	outline: boolean;
	href: string;
};

const config: BlockConfiguration<Attribute> = {
	title: "button",
	description: "heading 1",
	category: "widgets",
	icon: "smiley",
	supports: {},
	attributes: {
		title: {
			type: "string",
		},
		outline: {
			type: "boolean",
			default: false,
		},
		href: {
			type: "string",
		},
	},
	example: {},
	edit,
	save,
};

register(config);
