import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Problems, { Accent, Props } from "./Problems";

export default {
	title: "Parts/Problems",
	component: Problems,
} as ComponentMeta<typeof Problems>;

const Template: ComponentStory<typeof Problems> = (args) => (
	<Problems {...args} />
);

export const props: Props = {
	title: <div>こんなお悩みを抱えたトレーナーへ</div>,

	problemATitle: <>課題1</>,
	problemAImageUrl: "./undraw_professor_re_mj1s.svg",
	problemADescription: (
		<>
			トレーニング種目を知っているが、
			<Accent>効果や意義を説明できない...</Accent>
		</>
	),

	problemBTitle: <>課題2</>,
	problemBImageUrl: "./undraw_personal_trainer_ote3.svg",
	problemBDescription: (
		<>
			からだの評価はできたが、目的を達成するための
			<Accent>トレーニングプランが組めない...</Accent>
		</>
	),

	problemCTitle: <>課題3</>,
	problemCImageUrl: "./undraw_people_re_8spw.svg",
	problemCDescription: (
		<>
			トレーナー同士や選手・コーチと
			<Accent>コミュニケーションを取ることが難しい…</Accent>
		</>
	),

	problemDTitle: <>課題4</>,
	problemDImageUrl: "./undraw_spreadsheet_re_cn18.svg",
	problemDDescription: (
		<>
			これまで学んだ<Accent>知識や技術の整理</Accent>ができない…
		</>
	),

	bottomTitle: <>Performance Treasure Mapはこれらすべてを解決できます!!</>,
	bottomImageUrl: "./map.png",
};
export const Basic = Template.bind({});
Basic.args = props;
