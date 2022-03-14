import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Flow, { Props } from "./Flow";

export default {
	title: "Parts/Flow",
	component: Flow,
} as ComponentMeta<typeof Flow>;

const Template: ComponentStory<typeof Flow> = (args) => <Flow {...args} />;

export const props: Props = {
	cardATitle: <>PTM Community</>,
	cardAImageUrl: "./undraw_secure_files_re_6vdh.svg",
	cardADescription: (
		<>
			<div>K-Map購入者限定の</div>
			<div>Facebookコミュニティ</div>
		</>
	),
	cardALabel: <>無料</>,

	cardBTitle: <>PTM Lab</>,
	cardBImageUrl: "./undraw_team_collaboration_re_ow29.svg",
	cardBDescription: (
		<>
			<div>みんなで最高のMapをつくる</div>
			<div>コミュニティ</div>
		</>
	),
	cardBLabel: <>月額 990円</>,
};
export const Basic = Template.bind({});
Basic.args = props;
