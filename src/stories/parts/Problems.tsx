import { Icon } from "@iconify/react";
import React from "react";
import { Problem } from "~/stories/Problem";

export const Accent: React.FC = ({ children }) => (
	<span className="ptm-font-bold ptm-text-[#19585F]">{children}</span>
);

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
			<div className="ptm-container ptm-py-8 ptm-mx-auto ptm-max-w-5xl ptm-bg-white">
				<div className="ptm-pb-4 ptm-text-3xl ptm-font-bold ptm-text-center">
					{props.title}
				</div>
				<div className="ptm-flex ptm-flex-col">
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
				</div>
			</div>
			<div className="ptm-py-8">
				<Icon icon="mdi:chevron-down" fontSize={56} className="ptm-mx-auto" />
			</div>
			<div className="ptm-flex ptm-justify-center ptm-items-center ptm-py-10 ptm-px-4 ptm-text-2xl ptm-font-bold ptm-text-white ptm-bg-[#0591A0]">
				{props.message}
			</div>
		</>
	);
};

export default View;
