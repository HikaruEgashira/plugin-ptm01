import { registerBlockType } from "@wordpress/blocks";
import type { BlockConfiguration } from "@wordpress/blocks";
// import { __ } from "@wordpress/i18n";

const namespace = "hikaeptm";

export const register = <T>(conf: BlockConfiguration<T>) => {
	registerBlockType(`${namespace}/${conf.title}`, {
		...conf,
		// title: __(conf.title, namespace),
		// description: __(conf.description!, namespace),
	});
};
