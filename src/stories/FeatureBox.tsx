import cn from "classnames";
import React from "react";
import { ButtonLink } from "./Button";

export type FeatureBoxProps = {
	title: JSX.Element;
	imageUrl: string;
	description: JSX.Element;
	actionLabel: JSX.Element;
	actionUrl: string;
	className?: string;
};

export const FeatureBox: React.FC<FeatureBoxProps> = ({
	title,
	imageUrl,
	description,
	actionLabel,
	actionUrl,
	className,
}) => {
	return (
		<div
			className={cn(
				"ptm-flex ptm-flex-col ptm-items-center ptm-gap-4 ptm-p-4",
				className
			)}
		>
			<div className="ptm-text-3xl ptm-font-bold">{title}</div>
			<img
				className="ptm-h-36 ptm-w-full ptm-object-contain"
				alt="featureimage"
				src={imageUrl}
			/>
			<div className="ptm-text-lg ptm-w-full ptm-leading-normal ptm-text-left ptm-overflow-y-auto">
				{description}
			</div>
			<ButtonLink url={actionUrl} small>
				{actionLabel}
			</ButtonLink>
		</div>
	);
};
