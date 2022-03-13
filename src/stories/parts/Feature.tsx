import React from "react";
import { FeatureBox } from "../FeatureBox";

const Accent: React.FC = ({ children }) => (
	<span className="text-[#19585F]">{children}</span>
);

export type Attribute = {};

const View: React.FC<Attribute> = () => {
	return (
		<>
			<div className="py-10 lg:px-10 max-w-5xl mx-auto">
				<div className="font-bold text-xl text-center pb-8">
					<div>Original K-Mapの強み</div>
				</div>
				<div className="text-center font-bold">
					<span className="text-red-500">＼</span> 驚異のリンク{" "}
					<span className="text-red-500">／</span>
				</div>
				<div className="flex items-center lg:items-start flex-col lg:flex-row w-full gap-4">
					<FeatureBox
						className="w-full max-w-sm lg:w-1/3"
						title="マップ"
						imageUrl="./undraw_professor_re_mj1s.svg"
						description={
							<>
								明確な目標設定と膨大な情報が整理されています。マップから動画やブログにとべたり、論文などの科学的情報や参考資料にとべたりします。
							</>
						}
						actionLabel="K-Mapの購入はこちらから"
						actionUrl="/exercise/1"
					/>
					<FeatureBox
						className="w-full max-w-sm lg:w-1/3"
						title="動画"
						imageUrl="./undraw_professor_re_mj1s.svg"
						description={
							<>
								設定した目的への道筋をマップで確認して、その達成に不可欠なトレーニングやエクササイズ動画を映像で確認できます。
							</>
						}
						actionLabel="動画視聴はこちらから"
						actionUrl="/exercise/1"
					/>
					<FeatureBox
						className="w-full max-w-sm lg:w-1/3"
						title="ブログ"
						imageUrl="./undraw_professor_re_mj1s.svg"
						description={
							<>
								作成したマップや各種目の詳しい解説をブログで確認できます。専門的な情報がこのブログに集約されています。
							</>
						}
						actionLabel="ブログはこのサイト内から"
						actionUrl="/exercise/1"
					/>
				</div>
				<ul className="max-w-xl mx-auto my-10 text-lg grid gap-2">
					<li>✅マップ x 動画 x ブログ解説がすべてリンクされています！！</li>
					<li>✅大学教員・専門研究者と連携して作成しています！！</li>
					<li>
						✅英語対応（マップ・動画・ブログ）をしているので専門英語の勉強にもなります！！
					</li>
				</ul>
			</div>
		</>
	);
};

export default View;
