import { registerBlockType } from "@wordpress/blocks";
import type { BlockConfiguration } from "@wordpress/blocks";

const namespace = "ptm01";

export const register = <T>(conf: BlockConfiguration<T>) => {
	registerBlockType(`${namespace}/${conf.title}`, conf);
};
