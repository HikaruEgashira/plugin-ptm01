import React from "react";
import csv from "~/assets/undraw_personal_trainer_ote3.svg";

export type ProblemProps = {};

export const Problem: React.FC<ProblemProps> = () => {
	return (
		<div className="p-4 pt-8 w-72">
			<div className="relative h-36 p-2 bg-[#E5EDF5]">
				<div className="absolute w-20 text-center text-white bg-[#05549F] rounded-full p-2 top-[-1rem] font-bold">
					課題.1
				</div>
				<img className="w-full h-full" alt="csv" src={csv} />
			</div>
			<div className="leading-7 font-bold pt-2">
				トレーニング種目を知っているが、
				<span className="text-[#05549F]">効果や意義を説明できない...</span>
			</div>
		</div>
	);
};
