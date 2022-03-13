import React from "react";

import MainVisual from "./parts/MainVisual";
import Feature from "./parts/Feature";
import Problems from "./parts/Problems";
import Flow from "./parts/Flow";

import { props as mainVisualProps } from "./parts/MainVisual.stories";

export default {
	title: "Template",
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = () => (
	<>
		<MainVisual {...mainVisualProps} />
		<Problems />
		<Feature />
		<Flow />
	</>
);
