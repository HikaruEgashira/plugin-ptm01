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
		<button
			className={cn(
				"button ptm-py-3 ptm-px-6 ptm-inline-flex ptm-justify-center ptm-items-center ptm-min-w-[10rem] ptm-whitespace-nowrap",
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
		</button>
	);
};

export const ButtonLink: React.FC<{
	url: string;
	outline?: boolean;
	rounded?: boolean;
	small?: boolean;
	className?: string;
}> = ({
	url,
	outline = false,
	rounded = false,
	small = false,
	children,
	className,
}) => (
	<a href={url} className="ptm-grid link">
		<Button
			outline={outline}
			rounded={rounded}
			small={small}
			className={cn("hover:ptm-shadow-2xl ptm-transition-all", className)}
		>
			{children}
		</Button>
	</a>
);
