import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Problem } from "~/stories/Problem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
export default {
	title: "Components/Problem",
	component: Problem,
	argTypes: {},
} as ComponentMeta<typeof Problem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Problem> = (args) => (
	<Problem {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = Template.bind({});
Basic.args = {};
