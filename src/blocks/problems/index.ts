import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";
import save from "./save";

export type Attribute = {
	title: string;

	problemATitle: string;
	problemAImageUrl: string;
	problemADescription: string;

	problemBTitle: string;
	problemBImageUrl: string;
	problemBDescription: string;

	problemCTitle: string;
	problemCImageUrl: string;
	problemCDescription: string;

	problemDTitle: string;
	problemDImageUrl: string;
	problemDDescription: string;

	bottomTitle: string;
	bottomImageUrl: string;
};

const config: BlockConfiguration<Attribute> = {
	title: "questions",
	description: "questions",
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

		problemATitle: {
			type: "string",
		},
		problemAImageUrl: {
			type: "string",
		},
		problemADescription: {
			type: "string",
		},

		problemBTitle: {
			type: "string",
		},
		problemBImageUrl: {
			type: "string",
		},
		problemBDescription: {
			type: "string",
		},

		problemCTitle: {
			type: "string",
		},
		problemCImageUrl: {
			type: "string",
		},
		problemCDescription: {
			type: "string",
		},

		problemDTitle: {
			type: "string",
		},
		problemDImageUrl: {
			type: "string",
		},
		problemDDescription: {
			type: "string",
		},

		bottomTitle: {
			type: "string",
		},
		bottomImageUrl: {
			type: "string",
		},
	},
	example: {},
	edit,
	save,
};

register(config);
