import cn from "classnames";
import React from "react";

export type ProblemProps = {
	title: JSX.Element;
	imageUrl: string;
	description: JSX.Element;
	className?: string;
};

export const Problem: React.FC<ProblemProps> = ({
	title,
	imageUrl,
	description,
	className,
}) => {
	return (
		<div className={cn("p-4 pt-8", className)}>
			<div className="relative h-48 p-2 bg-[#E5F3F5]">
				<div className="absolute w-20 text-center text-white bg-[#05909F] rounded-full px-2 py-1 top-[-.75rem] text-sm">
					{title}
				</div>
				<img
					className="w-full h-full p-2 object-contain"
					alt="csv"
					src={imageUrl}
				/>
			</div>
			<div className="leading-relaxed pt-2">{description}</div>
		</div>
	);
};
