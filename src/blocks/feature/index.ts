import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";
import save from "./save";

export type Attribute = {
	topTitle: string;
	topImageUrl: string;

	title: string;
	subTitle: string;

	featureATitle: string;
	featureAImageUrl: string;
	featureADescription: string;
	featureAActoinLabel: string;
	featureAActionUrl: string;

	featureBTitle: string;
	featureBImageUrl: string;
	featureBDescription: string;
	featureBActoinLabel: string;
	featureBActionUrl: string;

	featureCTitle: string;
	featureCImageUrl: string;
	featureCDescription: string;
	featureCActoinLabel: string;
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
		topTitle: {
			type: "string",
		},
		topImageUrl: {
			type: "string",
		},

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
		featureAActoinLabel: {
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
		featureBActoinLabel: {
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
		featureCActoinLabel: {
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
