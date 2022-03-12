import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Problems from "./Problems";

export default {
	title: "Parts/Problems",
	component: Problems,
} as ComponentMeta<typeof Problems>;

const Template: ComponentStory<typeof Problems> = (args) => (
	<Problems {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
