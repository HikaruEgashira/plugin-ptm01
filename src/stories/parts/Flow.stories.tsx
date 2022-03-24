import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Flow, { Props } from "./Flow";
import { ButtonLink } from "../Button";

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
	cardAButton: (
		<ButtonLink url={"https://ptm01.com/private/"} rounded>
			無料
		</ButtonLink>
	),

	cardBTitle: <>PTM Lab</>,
	cardBImageUrl: "./undraw_team_collaboration_re_ow29.svg",
	cardBDescription: (
		<>
			<div>みんなで最高のMapをつくる</div>
			<div>コミュニティ</div>
		</>
	),
	cardBButton: (
		<ButtonLink url={"https://ptm01.com/ptm-lab/"} rounded>
			月額 990円
		</ButtonLink>
	),
};
export const Basic = Template.bind({});
Basic.args = props;
