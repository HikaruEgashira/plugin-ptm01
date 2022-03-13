import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Feature from "./Feature";

export default {
	title: "Parts/Feature",
	component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args) => (
	<Feature {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
