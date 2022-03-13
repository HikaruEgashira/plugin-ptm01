import * as React from "react";
import cn from "classnames";

export type ButtonProps = {
	outline?: boolean;
	className?: string;
	rounded?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	outline = false,
	rounded = false,
}) => {
	return (
		<div
			className={cn(
				"py-3 px-6 inline-flex justify-center items-center min-w-[10rem]",
				{
					rounded: !rounded,
					"rounded-full": rounded,
					"border-2": outline,
					"border-[#19585F]": outline,
					"bg-[#19585F]": !outline,
					"text-white": !outline,
				},
				className
			)}
		>
			{children}
		</div>
	);
};

export const ButtonLink: React.FC<{
	url: string;
	outline?: boolean;
	rounded?: boolean;
}> = ({ url, outline = false, rounded = false, children }) => (
	<a href={url}>
		<Button
			outline={outline}
			rounded={rounded}
			className="hover:shadow-2xl transition-all"
		>
			{children}
		</Button>
	</a>
);
