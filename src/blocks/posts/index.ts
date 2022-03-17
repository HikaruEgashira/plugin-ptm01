import apiFetch from "@wordpress/api-fetch";
import type { BlockConfiguration } from "@wordpress/blocks";
import "../../tailwind.css";
import { register } from "../helper";

import edit from "./edit";
import save from "./save";

const categories = [{ label: "すべて", value: -1 }];
apiFetch({ path: "/wp/v2/categories?_fields=name,slug,id" }).then(
	(cates: any) => {
		cates.forEach((cate) => {
			categories.push({ label: cate["name"], value: cate["id"] });
		});
	}
);
console.log(categories); //デバッグ

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
