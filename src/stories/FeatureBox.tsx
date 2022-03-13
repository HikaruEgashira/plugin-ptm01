import cn from "classnames";
import React from "react";
import { Button } from "./Button";

export type FeatureBoxProps = {
	title: string;
	imageUrl: string;
	description: JSX.Element;
	actionLabel: string;
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
			<div className="text-4xl font-bold">{title}</div>
			<img className="h-36 w-full" alt="featureimage" src={imageUrl} />
			<div className="w-full text-left h-24">{description}</div>
			<a href={actionUrl}>
				<Button rounded={false}>{actionLabel}</Button>
			</a>
		</div>
	);
};
