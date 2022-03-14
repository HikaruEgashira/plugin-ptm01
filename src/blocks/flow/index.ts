import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";
import save from "./save";

export type Attribute = {
	cardATitle: string;
	cardAImageUrl: string;
	cardADescription: string;
	cardALabel: string;

	cardBTitle: string;
	cardBImageUrl: string;
	cardBDescription: string;
	cardBLabel: string;
};

const config: BlockConfiguration<Attribute> = {
	title: "flow",
	description: "flow",
	category: "design",
	icon: "smiley",
	supports: {
		multiple: false,
		reusable: false,
	},
	attributes: {
		cardADescription: {
			type: "string",
		},
		cardAImageUrl: {
			type: "string",
		},
		cardALabel: {
			type: "string",
		},
		cardATitle: {
			type: "string",
		},
		cardBDescription: {
			type: "string",
		},
		cardBImageUrl: {
			type: "string",
		},
		cardBLabel: {
			type: "string",
		},
		cardBTitle: {
			type: "string",
		},
	},
	example: {},
	edit,
	save,
};

register(config);
