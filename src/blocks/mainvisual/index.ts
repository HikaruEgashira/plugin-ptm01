import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import save from "./save";
import edit from "./edit";

export type Attribute = {
	title: string;
	leftButtonLabel: string;
	leftButtonUrl: string;
	rightButtonLabel: string;
	rightButtonUrl: string;
};

const config: BlockConfiguration<Attribute> = {
	title: "mainvisual",
	description: "mainvisual",
	category: "design",
	icon: "smiley",
	supports: {
		multiple: false,
		reusable: false,
	},
	attributes: {
		title: {
			type: "string",
		},
		leftButtonLabel: {
			type: "string",
		},
		leftButtonUrl: {
			type: "string",
		},
		rightButtonLabel: {
			type: "string",
		},
		rightButtonUrl: {
			type: "string",
		},
	},
	example: {},
	edit,
	save,
};

register(config);
