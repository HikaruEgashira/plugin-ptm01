import React from "react";
import "~/tailwind.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<div
			style={{
				maxWidth: "860px",
			}}
		>
			<Story />
		</div>
	),
];
