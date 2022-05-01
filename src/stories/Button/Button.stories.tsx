import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "~/stories/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
export default {
	title: "Components/Button",
	component: Button,
	argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = Template.bind({});
Basic.args = {
	children: "ボタン",
};

export const Outline = Template.bind({});
Outline.args = {
	children: "ボタン",
	outline: true,
};
