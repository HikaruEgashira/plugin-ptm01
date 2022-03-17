import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Posts, { Props } from "./Posts";

export default {
	title: "Parts/Posts",
	component: Posts,
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />;

export const props: Props = {
	title: "トレーナー向け",
	posts: [
		{
			link: "",
			featured_media: 0,
			title: {
				rendered: "タイトル1",
			},
		},
		{
			link: "",
			featured_media: 1,
			title: {
				rendered: "タイトル2",
			},
		},
		{
			link: "",
			featured_media: 2,
			title: {
				rendered: "タイトル3",
			},
		},
	],
};

export const Basic = Template.bind({});
Basic.args = props;
