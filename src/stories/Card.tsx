import React from "react";
import cn from "classnames";
import { Button } from "./Button";

export type CardProps = {
	title: JSX.Element;
	description: JSX.Element;
	bottomLabel: JSX.Element;
	imageUrl: string;
	className?: string;
};

export const Card: React.FC<CardProps> = ({
	title,
	description,
	imageUrl,
	className,
	bottomLabel,
}) => {
	return (
		<div
			className={cn(
				"ptm-p-4 ptm-shadow-xl ptm-rounded-xl ptm-border",
				className
			)}
		>
			<div className="ptm-mx-auto ptm-max-w-xs ptm-flex ptm-flex-col ptm-items-center ptm-gap-4">
				<img
					className="ptm-h-36 ptm-px-4 ptm-w-full ptm-object-contain"
					alt="cardimage"
					src={imageUrl}
				/>
				<div className="ptm-text-2xl ptm-font-bold">{title}</div>
				<div className="ptm-text-center ptm-text-lg ptm-leading-relaxed">
					{description}
				</div>
				<Button rounded>{bottomLabel}</Button>
			</div>
		</div>
	);
};
