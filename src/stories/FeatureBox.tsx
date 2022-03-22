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
				className="ptm-object-contain ptm-h-32"
				alt="featureimage"
				src={imageUrl}
			/>
			<div className="ptm-w-full ptm-leading-normal ptm-text-left">
				{description}
			</div>
			<ButtonLink url={actionUrl} small>
				{actionLabel}
			</ButtonLink>
		</div>
	);
};
