import React, { useEffect } from "react";
import { Problem } from "~/stories/Problem";

export const Accent: React.FC = ({ children }) => (
	<span className="text-[#19585F] font-bold">{children}</span>
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

	slim?: boolean;
};

const View: React.FC<Props> = (props) => {
	return (
		<>
			<div className="ptm-container ptm-max-w-5xl ptm-mx-auto ptm-bg-white ptm-py-8">
				<div className="ptm-font-bold ptm-text-2xl ptm-text-center ptm-pb-4">
					{props.title}
				</div>
				<div className="ptm-flex ptm-flex-col">
					<div className="ptm-max-w-6xl ptm-w-full ptm-grid ptm-grid-cols-1 md:ptm-grid-cols-2">
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
		</>
	);
};

export default View;
