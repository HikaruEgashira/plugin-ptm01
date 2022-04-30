import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainVisual, { Props } from "./MainVisual";
import { ButtonLink } from "../Button";

export default {
	title: "Parts/MainVisual",
	component: MainVisual,
} as ComponentMeta<typeof MainVisual>;

const Template: ComponentStory<typeof MainVisual> = (args) => (
	<MainVisual {...args} />
);

export const props: Props = {
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
	movieUrl: "https://www.youtube.com/embed/q7s81feOwmM?controls=0"
};
export const Basic = Template.bind({});
Basic.args = props;
