import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";

export type Attribute = {};

const config: BlockConfiguration<Attribute> = {
	title: "posts",
	category: "widgets",
	icon: "smiley",
	supports: {},
	attributes: {},
	example: {},
	edit,
};

register(config);
