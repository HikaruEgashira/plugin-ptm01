import React from "react";
import { Problem } from "~/stories/Problem";

const Accent: React.FC = ({ children }) => (
	<span className="text-[#05339F]">{children}</span>
);

const View: React.FC = () => {
	return (
		<div className="bg-white p-10">
			<div className="font-bold text-xl text-center pb-4">
				<div>こんなお悩みを抱えたトレーナーへ</div>
			</div>
			<div className="grid xl:grid-cols-3 gap-4 place-content-center">
				<Problem
					title="課題1"
					imageUrl=""
					description={
						<>
							トレーニング種目を知っているが、
							<Accent>効果や意義を説明できない...</Accent>
						</>
					}
				></Problem>
				<Problem
					title="課題2"
					imageUrl=""
					description={
						<>
							からだの評価はできたが、
							<Accent>何の種目をして良いか分からない…</Accent>
						</>
					}
				></Problem>
				<Problem
					title="課題3"
					imageUrl=""
					description={<>段階的なトレーニングの構築が苦手…</>}
				></Problem>
				<Problem
					title="課題4"
					imageUrl=""
					description={
						<>
							トレーナー同士や選手・コーチと
							<Accent>コミュニケーションを取ることが難しい…</Accent>
						</>
					}
				></Problem>
				<Problem
					title="課題5"
					imageUrl=""
					description={<>これまで学んだ知識や技術の整理ができない…</>}
				></Problem>
			</div>
		</div>
	);
};

export default View;
