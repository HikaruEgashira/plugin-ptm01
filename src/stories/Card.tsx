import React from "react";
import cn from "classnames";
import { ButtonLink } from "./Button";

export type CardProps = {
	title: JSX.Element;
	description: JSX.Element;
	imageUrl: string;
	button: JSX.Element;
	className?: string;
};

export const Card: React.FC<CardProps> = ({
	title,
	description,
	imageUrl,
	className,
	button,
}) => {
	return (
		<div
			className={cn(
				"ptm-p-4 ptm-shadow-xl ptm-rounded-xl ptm-border",
				className
			)}
		>
			<div className="ptm-flex ptm-flex-col ptm-gap-4 ptm-items-center ptm-mx-auto ptm-max-w-xs">
				<img
					className="ptm-object-contain ptm-px-4 ptm-w-full ptm-h-36"
					alt="cardimage"
					src={imageUrl}
				/>
				<div className="ptm-text-2xl ptm-font-bold">{title}</div>
				<div className="ptm-text-lg ptm-leading-relaxed ptm-text-center">
					{description}
				</div>
				{button}
			</div>
		</div>
	);
};
