import React, { SVGProps } from "react";
import { Problem } from "~/stories/Problem";

export const Accent: React.FC = ({ children }) => (
	<span className="ptm-font-bold ptm-text-[#19585F]">{children}</span>
);

function MdiChevronDown(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width="6em" height="6em" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
			></path>
		</svg>
	);
}

export type Props = {
	title: JSX.Element;

	problemATitle: JSX.Element;
	problemAImageUrl: string;
	problemADescription: JSX.Element;

	problemBTitle: JSX.Element;
	problemBImageUrl: string;
	problemBDescription: JSX.Element;

	problemCTitle: JSX.Element;
	problemCImageUrl: string;
	problemCDescription: JSX.Element;

	problemDTitle: JSX.Element;
	problemDImageUrl: string;
	problemDDescription: JSX.Element;

	message: JSX.Element;

	slim?: boolean;
};

const View: React.FC<Props> = (props) => {
	return (
		<>
			<div className="ptm-container ptm-mx-auto ptm-max-w-5xl ptm-bg-white">
				<div className="ptm-py-4 ptm-text-3xl ptm-font-bold ptm-text-center">
					{props.title}
				</div>
				<div className="ptm-grid ptm-grid-cols-1 ptm-w-full ptm-max-w-6xl md:ptm-grid-cols-2">
					<Problem
						title={props.problemATitle}
						imageUrl={props.problemAImageUrl}
						description={props.problemADescription}
						slim={props.slim}
					/>
					<Problem
						title={props.problemBTitle}
						imageUrl={props.problemBImageUrl}
						description={props.problemBDescription}
						slim={props.slim}
					/>
					<Problem
						title={props.problemCTitle}
						imageUrl={props.problemCImageUrl}
						description={props.problemCDescription}
						slim={props.slim}
					/>
					<Problem
						title={props.problemDTitle}
						imageUrl={props.problemDImageUrl}
						description={props.problemDDescription}
						slim={props.slim}
					/>
				</div>
				<div className="ptm-grid ptm-place-items-center ptm-pb-4">
					<MdiChevronDown />
				</div>
			</div>
			<div className="ptm-flex ptm-justify-center ptm-items-center ptm-py-10 ptm-px-4 ptm-text-2xl ptm-font-bold ptm-text-white ptm-bg-[#0591A0]">
				{props.message}
			</div>
		</>
	);
};

export default View;
