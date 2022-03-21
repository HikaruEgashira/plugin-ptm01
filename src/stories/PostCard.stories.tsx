import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PostCard } from "~/stories/PostCard";

export default {
	title: "Components/PostCard",
	component: PostCard,
	argTypes: {},
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
	<div className="ptm-w-full ptm-max-w-sm">
		<PostCard {...args} />
	</div>
);

export const Basic = Template.bind({});
Basic.args = {
	post: {
		link: "",
		featured_media: 0,
		title: {
			rendered: "タイトル",
		},
	},
};
