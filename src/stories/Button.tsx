import * as React from "react";
import cn from "classnames";

export type ButtonProps = {
	outline?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ outline, children }) => {
	return (
		<div
			className={cn(
				"py-3 px-6 text-center min-w-[10rem] font-bold rounded-full inline-block",
				{
					"border-2": outline,
					"border-[#192E5F]": outline,
					"bg-[#192E5F]": !outline,
					"text-white": !outline,
				}
			)}
		>
			{children}
		</div>
	);
};
