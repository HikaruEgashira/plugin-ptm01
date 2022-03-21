import * as React from "react";
import cn from "classnames";

export type ButtonProps = {
	outline?: boolean;
	className?: string;
	rounded?: boolean;
	small?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	outline = false,
	rounded = false,
	small = false,
}) => {
	return (
		<div
			className={cn(
				"ptm-py-3 ptm-px-6 ptm-inline-flex ptm-justify-center ptm-items-center ptm-min-w-[10rem]",
				{
					"ptm-text-sm": small,
					"ptm-rounded": !rounded,
					"ptm-rounded-full": rounded,
					"ptm-border-2": outline,
					"ptm-border-[#19585F]": outline,
					"ptm-bg-[#19585F]": !outline,
					"ptm-text-white": !outline,
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
	small?: boolean;
}> = ({ url, outline = false, rounded = false, small = false, children }) => (
	<a href={url}>
		<Button
			outline={outline}
			rounded={rounded}
			small={small}
			className="hover:ptm-shadow-2xl ptm-transition-all"
		>
			{children}
		</Button>
	</a>
);
