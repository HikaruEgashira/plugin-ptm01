import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Feature, { Attribute } from "./Feature";

export default {
	title: "Parts/Feature",
	component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args) => (
	<Feature {...args} />
);

const props: Attribute = {};
export const Basic = Template.bind({});
Basic.args = props;
