import React, { useEffect } from "react";
import { Problem } from "~/stories/Problem";

const Accent: React.FC = ({ children }) => (
	<span className="text-[#19585F]">{children}</span>
);

export type Attribute = {};

const View: React.FC<Attribute> = () => {
	return (
		<>
			<div className="bg-white p-10 max-w-5xl mx-auto">
				<div className="font-bold text-xl text-center pb-4">
					<div>こんなお悩みを抱えたトレーナーへ</div>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center lg:items-start flex-col lg:flex-row w-full">
						<Problem
							className="w-full max-w-sm lg:w-1/3"
							title="課題1"
							imageUrl="./undraw_professor_re_mj1s.svg"
							description={
								<>
									トレーニング種目を知っているが、
									<Accent>効果や意義を説明できない...</Accent>
								</>
							}
						/>
						<Problem
							className="w-full max-w-sm lg:w-1/3"
							title="課題2"
							imageUrl="./undraw_personal_trainer_ote3.svg"
							description={
								<>
									からだの評価はできたが、
									<Accent>何の種目をして良いか分からない…</Accent>
								</>
							}
						/>
						<Problem
							className="w-full max-w-sm lg:w-1/3"
							title="課題3"
							imageUrl="./undraw_stepping_up_g6oo.svg"
							description={<>段階的なトレーニングの構築が苦手…</>}
						/>
					</div>
					<div className="flex items-center lg:items-start flex-col lg:flex-row w-full place-content-center">
						<Problem
							className="w-full max-w-sm lg:w-1/3"
							title="課題4"
							imageUrl="./undraw_people_re_8spw.svg"
							description={
								<>
									トレーナー同士や選手・コーチと
									<Accent>コミュニケーションを取ることが難しい…</Accent>
								</>
							}
						/>
						<Problem
							className="w-full max-w-sm lg:w-1/3"
							title="課題5"
							imageUrl="./undraw_spreadsheet_re_cn18.svg"
							description={<>これまで学んだ知識や技術の整理ができない…</>}
						/>
					</div>
				</div>
			</div>
			<div className="my-10">
				<div className="px-4 flex items-center justify-center text-2xl h-72 text-white bg-[#0591A0]">
					Performance Treasure Mapはこれらすべてを解決できます!!
				</div>
				<img
					className="h-[36rem] min-h-48 w-full object-cover"
					src="./map.png"
					alt="map"
				/>
			</div>
		</>
	);
};

export default View;
