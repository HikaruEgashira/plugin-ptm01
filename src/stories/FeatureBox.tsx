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
		<div className={cn("flex flex-col items-center gap-4 p-4", className)}>
			<div className="text-3xl font-bold">{title}</div>
			<img className="h-36 w-full" alt="featureimage" src={imageUrl} />
			<div className="w-full text-left h-24 overflow-y-auto">{description}</div>
			<ButtonLink rounded={false} url={actionUrl}>
				{actionLabel}
			</ButtonLink>
		</div>
	);
};
