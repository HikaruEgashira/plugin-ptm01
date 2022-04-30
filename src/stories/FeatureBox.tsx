import cn from "classnames";
import React from "react";

export type FeatureBoxProps = {
	title: JSX.Element;
	imageUrl: string;
	description: JSX.Element;
	action: JSX.Element;
	className?: string;
};

export const FeatureBox: React.FC<FeatureBoxProps> = ({
	title,
	imageUrl,
	description,
	action,
	className,
}) => {
	return (
		<div
			className={cn(
				"ptm-flex ptm-flex-col ptm-items-center ptm-gap-4 ptm-p-4 ptm-tracking-wide",
				className
			)}
		>
			<div className="ptm-text-3xl ptm-font-bold">{title}</div>
			<img
				className="ptm-object-contain ptm-h-32"
				alt="featureimage"
				src={imageUrl}
			/>
			<div className="ptm-grow ptm-w-full ptm-leading-relaxed ptm-text-left ptm-text-[#555659]">
				{description}
			</div>
			{action}
		</div>
	);
};
