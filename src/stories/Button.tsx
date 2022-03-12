import * as React from "react";
import cn from "classnames";

export type ButtonProps = {
	outline?: boolean;
	className?: string;
};

export const Button: React.FC<ButtonProps> = ({
	outline,
	className,
	children,
}) => {
	return (
		<div
			className={cn(
				"py-3 px-6 inline-flex justify-center items-center min-w-[10rem] font-bold rounded-full",
				{
					"border-2": outline,
					"border-[#192E5F]": outline,
					"bg-[#192E5F]": !outline,
					"text-white": !outline,
				},
				className
			)}
		>
			{children}
		</div>
	);
};
