import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeatureBox } from "~/stories/FeatureBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
export default {
	title: "Components/FeatureBox",
	component: FeatureBox,
	argTypes: {},
} as ComponentMeta<typeof FeatureBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeatureBox> = (args) => (
	<div className="max-w-xs">
		<FeatureBox {...args} />
	</div>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = Template.bind({});
Basic.args = {
	title: "マップ",
	description: <>マップを作成する</>,
	actionLabel: "マップを作成する",
	actionUrl: "/map",
	imageUrl: "./undraw_people_re_8spw.svg",
};
