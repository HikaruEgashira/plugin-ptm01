import React, { useEffect } from "react";
import { Problem } from "~/stories/Problem";

const Accent: React.FC = ({ children }) => (
	<span className="text-[#19585F] font-bold">{children}</span>
);

export type Attribute = {};

const View: React.FC<Attribute> = () => {
	return (
		<>
			<div className="bg-white py-10 lg:px-10 max-w-5xl mx-auto">
				<div className="font-bold text-xl text-center pb-4">
					<div>こんなお悩みを抱えたトレーナーへ</div>
				</div>
				<div className="flex flex-col">
					<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
						<Problem
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
							title="課題2"
							imageUrl="./undraw_personal_trainer_ote3.svg"
							description={
								<>
									からだの評価はできたが、目的を達成するための
									<Accent>トレーニングプランが組めない...</Accent>
								</>
							}
						/>
						<Problem
							title="課題3"
							imageUrl="./undraw_people_re_8spw.svg"
							description={
								<>
									トレーナー同士や選手・コーチと
									<Accent>コミュニケーションを取ることが難しい…</Accent>
								</>
							}
						/>
						<Problem
							title="課題4"
							imageUrl="./undraw_spreadsheet_re_cn18.svg"
							description={
								<>
									これまで学んだ<Accent>知識や技術の整理</Accent>ができない…
								</>
							}
						/>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="px-4 flex items-center justify-center text-2xl h-64 text-white bg-[#0591A0]">
					Performance Treasure Mapはこれらすべてを解決できます!!
				</div>
				<img className="h-96 w-full object-cover" src="./map.png" alt="map" />
			</div>
		</>
	);
};

export default View;
