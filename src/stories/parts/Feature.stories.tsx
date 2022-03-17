import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Feature, { Props } from "./Feature";

export default {
	title: "Parts/Feature",
	component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args) => (
	<Feature {...args} />
);

export const props: Props = {
	topTitle: <>Performance Treasure Mapはこれらすべてを解決できます!!</>,
	topImageUrl: "./map.png",

	title: <div>Original K-Mapの強み</div>,
	subTitle: (
		<>
			<span className="text-red-500">＼</span> 驚異のリンク{" "}
			<span className="text-red-500">／</span>
		</>
	),

	featureATitle: <>マップ</>,
	featureAImageUrl: "./undraw_professor_re_mj1s.svg",
	featureAActoinLabel: <>K-Mapの購入はこちらから</>,
	featureAActionUrl: "https://k-map.jp/",
	featureADescription: (
		<>
			明確な目標設定と膨大な情報が整理されています。マップから動画やブログにとべたり、論文などの科学的情報や参考資料にとべたりします。
		</>
	),

	featureBTitle: <>動画</>,
	featureBImageUrl: "./undraw_professor_re_mj1s.svg",
	featureBActoinLabel: <>動画視聴はこちらから</>,
	featureBActionUrl: "https://k-map.jp/",
	featureBDescription: (
		<>
			設定した目的への道筋をマップで確認して、その達成に不可欠なトレーニングやエクササイズ動画を映像で確認できます。
		</>
	),

	featureCTitle: <>ブログ</>,
	featureCImageUrl: "./undraw_professor_re_mj1s.svg",
	featureCActoinLabel: <>ブログはこのサイト内から</>,
	featureCActionUrl: "https://k-map.jp/",
	featureCDescription: (
		<>
			作成したマップや各種目の詳しい解説をブログで確認できます。専門的な情報がこのブログに集約されています。
		</>
	),

	pointA: <div>✅マップ x 動画 x ブログ解説がすべてリンクされています！！</div>,
	pointB: <div>✅大学教員・専門研究者と連携して作成しています！！</div>,
	pointC: (
		<div>
			✅英語対応（マップ・動画・ブログ）をしているので専門英語の勉強にもなります！！
		</div>
	),
};

export const Basic = Template.bind({});
Basic.args = props;
