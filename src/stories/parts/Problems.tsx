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

	bottomTitle: JSX.Element;
	bottomImageUrl: string;
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
						/>
						<Problem
							title={props.problemBTitle}
							imageUrl={props.problemBImageUrl}
							description={props.problemBDescription}
						/>
						<Problem
							title={props.problemCTitle}
							imageUrl={props.problemCImageUrl}
							description={props.problemCDescription}
						/>
						<Problem
							title={props.problemDTitle}
							imageUrl={props.problemDImageUrl}
							description={props.problemDDescription}
						/>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="px-4 flex items-center justify-center text-2xl h-64 text-white bg-[#0591A0]">
					{props.bottomTitle}
				</div>
				<img
					className="h-96 w-full object-cover"
					src={props.bottomImageUrl}
					alt="map"
				/>
			</div>
		</>
	);
};

export default View;
