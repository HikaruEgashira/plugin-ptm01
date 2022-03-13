import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainVisual, { Attribute } from "./MainVisual";
import { ButtonLink } from "../Button";

export default {
	title: "Parts/MainVisual",
	component: MainVisual,
} as ComponentMeta<typeof MainVisual>;

const Template: ComponentStory<typeof MainVisual> = (args) => (
	<MainVisual {...args} />
);

export const props: Attribute = {
	title: (
		<>
			パフォーマンスに関する混沌とした情報を管理し「言語化・可視化」した新時代の教科書
		</>
	),
	leftButton: (
		<ButtonLink rounded url="https://google.com">
			Performance Treasure Map とは??
		</ButtonLink>
	),
	rightButton: (
		<ButtonLink rounded url="https://google.com" outline>
			オンラインストア
		</ButtonLink>
	),
};
export const Basic = Template.bind({});
Basic.args = props;
