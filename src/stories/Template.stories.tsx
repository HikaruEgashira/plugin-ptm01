import React from "react";

import MainVisual from "./parts/MainVisual";
import Feature from "./parts/Feature";
import Problems from "./parts/Problems";
import Flow from "./parts/Flow";

import { props as mainVisualProps } from "./parts/MainVisual.stories";
import { props as problemsProps } from "./parts/Problems.stories";
import { props as featureProps } from "./parts/Feature.stories";
import { props as flowProps } from "./parts/Flow.stories";

export default {
	title: "Template",
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = () => (
	<>
		<MainVisual {...mainVisualProps} />
		<Problems {...problemsProps} />
		<Feature {...featureProps} />
		<Flow {...flowProps} />
	</>
);
