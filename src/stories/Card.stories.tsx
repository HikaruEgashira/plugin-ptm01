import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "~/stories/Card";

export default {
	title: "Components/Card",
	component: Card,
	argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
	<div className="ptm-max-w-sm">
		<Card {...args} />
	</div>
);

export const Basic = Template.bind({});
Basic.args = {
	imageUrl: "./undraw_people_re_8spw.svg",
	title: <>PTM Community</>,
	description: (
		<>
			<div>K-Map購入者限定の</div>
			<div>Facebookコミュニティ</div>
		</>
	),
	bottomLabel: <>無料</>,
};
