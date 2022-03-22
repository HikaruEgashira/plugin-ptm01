import cn from "classnames";
import React from "react";

export type ProblemProps = {
	title: JSX.Element;
	imageUrl: string;
	description: JSX.Element;
	className?: string;
	slim?: boolean;
};

export const Problem: React.FC<ProblemProps> = ({
	title,
	imageUrl,
	description,
	className,
	slim,
}) => {
	return (
		<div className={cn("ptm-p-4 ptm-pt-8", className)}>
			<div className="ptm-relative ptm-p-2 ptm-h-48 ptm-bg-[#E5F3F5]">
				<div className="ptm-absolute ptm-top-[-.75rem] ptm-py-1 ptm-px-2 ptm-w-20 ptm-text-sm ptm-text-center ptm-text-white ptm-bg-[#05909F] ptm-rounded-full">
					{title}
				</div>
				<img
					className={cn("ptm-w-full ptm-h-full ptm-p-2 ptm-object-contain", {
						"ptm-w-1/2 ptm-h-1/2": slim,
					})}
					alt="csv"
					src={imageUrl}
				/>
			</div>
			<div className="ptm-pt-2 ptm-leading-relaxed">{description}</div>
		</div>
	);
};
