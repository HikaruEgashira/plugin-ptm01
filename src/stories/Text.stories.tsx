import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "~/stories/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
export default {
	title: "Components/Text",
	component: Text,
	argTypes: {},
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = Template.bind({});
Basic.args = {
	label: "Hello World",
};
