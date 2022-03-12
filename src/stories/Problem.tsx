import React from "react";

export type ProblemProps = {
	title: string;
	imageUrl: string;
	description: JSX.Element;
};

export const Problem: React.FC<ProblemProps> = ({
	title,
	imageUrl,
	description,
}) => {
	return (
		<div className="p-4 pt-8 w-full max-w-[24rem]">
			<div className="relative h-36 p-2 bg-[#E5EAF5]">
				<div className="absolute w-20 text-center text-white bg-[#05339F] rounded-full px-2 py-1 top-[-.5rem] font-bold text-sm">
					{title}
				</div>
				<img className="w-full h-full" alt="csv" src={imageUrl} />
			</div>
			<div className="leading-7 font-bold pt-2">{description}</div>
		</div>
	);
};
