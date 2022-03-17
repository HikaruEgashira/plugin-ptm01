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
			<div className="bg-white py-10 lg:px-10 max-w-5xl mx-auto">
				<div className="font-bold text-xl text-center pb-4">{props.title}</div>
				<div className="flex flex-col">
					<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
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
