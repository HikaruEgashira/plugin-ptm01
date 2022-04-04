import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";
import save from "./save";

export type Attribute = {
	title: string;
	subTitle: string;

	featureATitle: string;
	featureAImageUrl: string;
	featureADescription: string;
	featureAAction: string;
	featureAActionUrl: string;

	featureBTitle: string;
	featureBImageUrl: string;
	featureBDescription: string;
	featureBAction: string;
	featureBActionUrl: string;

	featureCTitle: string;
	featureCImageUrl: string;
	featureCDescription: string;
	featureCAction: string;
	featureCActionUrl: string;

	pointA: string;
	pointB: string;
	pointC: string;
};

const config: BlockConfiguration<Attribute> = {
	title: "feature",
	description: "feature",
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
		subTitle: {
			type: "string",
		},

		featureATitle: {
			type: "string",
		},
		featureAImageUrl: {
			type: "string",
		},
		featureADescription: {
			type: "string",
		},
		featureAAction: {
			type: "string",
		},
		featureAActionUrl: {
			type: "string",
		},

		featureBTitle: {
			type: "string",
		},
		featureBImageUrl: {
			type: "string",
		},
		featureBDescription: {
			type: "string",
		},
		featureBAction: {
			type: "string",
		},
		featureBActionUrl: {
			type: "string",
		},

		featureCTitle: {
			type: "string",
		},
		featureCImageUrl: {
			type: "string",
		},
		featureCDescription: {
			type: "string",
		},
		featureCAction: {
			type: "string",
		},
		featureCActionUrl: {
			type: "string",
		},

		pointA: {
			type: "string",
		},
		pointB: {
			type: "string",
		},
		pointC: {
			type: "string",
		},
	},
	example: {},
	edit,
	save,
};

register(config);
