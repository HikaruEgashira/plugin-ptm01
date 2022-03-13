import React from "react";
import cn from "classnames";
import { Button } from "./Button";

export type CardProps = {
	title: string;
	imageUrl: string;
	description: JSX.Element;
	className?: string;
	bottomLabel?: string;
};

export const Card: React.FC<CardProps> = ({
	title,
	description,
	imageUrl,
	className,
	bottomLabel,
}) => {
	return (
		<div className={cn("py-8 shadow-xl rounded-xl", className)}>
			<div className="mx-auto max-w-xs flex flex-col items-center gap-4">
				<img className="h-36 w-full" alt="cardimage" src={imageUrl} />
				<div className="text-2xl font-bold">{title}</div>
				<div className="text-center leading-relaxed">{description}</div>
				<Button rounded>{bottomLabel}</Button>
			</div>
		</div>
	);
};
