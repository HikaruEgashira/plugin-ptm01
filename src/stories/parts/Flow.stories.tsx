import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Flow, { Attribute } from "./Flow";

export default {
	title: "Parts/Flow",
	component: Flow,
} as ComponentMeta<typeof Flow>;

const Template: ComponentStory<typeof Flow> = (args) => (
	<Flow {...args} />
);

const props: Attribute = {};
export const Basic = Template.bind({});
Basic.args = props;
