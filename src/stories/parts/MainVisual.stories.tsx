import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainVisual from "./MainVisual";
import { ButtonLink } from "../Button";

export default {
	title: "Parts/MainVisual",
	component: MainVisual,
} as ComponentMeta<typeof MainVisual>;

const Template: ComponentStory<typeof MainVisual> = (args) => (
	<MainVisual {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	title: (
		<>
			パフォーマンスに関する混沌とした情報を管理し「言語化・可視化」した新時代の教科書
		</>
	),
	leftButton: (
		<ButtonLink
			label={<>Performance Treasure Map とは??</>}
			url="https://google.com"
		/>
	),
	rightButton: (
		<ButtonLink
			label={<>オンラインストア</>}
			url="https://google.com"
			outline
		/>
	),
};
