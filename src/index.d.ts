import * as Element from "@wordpress/element";
import * as Components from "@wordpress/components";
import apiFetch from "@wordpress/api-fetch";
declare module "*.svg" {
	const content: string;
	export default content;
}

declare global {
	const wp: {
		element: typeof Element;
		components: typeof Components;
		apiFetch: typeof apiFetch;
		// There are more things here but these are the ones we care about
	};
}
