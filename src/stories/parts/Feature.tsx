import React from "react";
import { FeatureBox } from "../FeatureBox";

export type Props = {
	title: JSX.Element;
	subTitle: JSX.Element;

	featureATitle: JSX.Element;
	featureAImageUrl: string;
	featureADescription: JSX.Element;
	featureAAction: JSX.Element;
	featureAActionUrl: string;

	featureBTitle: JSX.Element;
	featureBImageUrl: string;
	featureBDescription: JSX.Element;
	featureBAction: JSX.Element;
	featureBActionUrl: string;

	featureCTitle: JSX.Element;
	featureCImageUrl: string;
	featureCDescription: JSX.Element;
	featureCAction: JSX.Element;
	featureCActionUrl: string;

	pointA: JSX.Element;
	pointB: JSX.Element;
	pointC: JSX.Element;
};

const View: React.FC<Props> = (props) => {
	return (
		<div className="ptm-bg-[#F3F7F8]">
			<div className="ptm-container ptm-pb-8 ptm-mx-auto">
				<div className="ptm-py-4 ptm-text-3xl ptm-font-bold ptm-text-center">
					{props.title}
				</div>
				<div className="ptm-pb-8 ptm-text-xl ptm-font-bold ptm-text-center">
					{props.subTitle}
				</div>
				<div className="ptm-flex ptm-flex-col ptm-gap-4 ptm-items-stretch sm:ptm-flex-row">
					<FeatureBox
						className="ptm-w-full lg:ptm-w-1/3"
						title={props.featureATitle}
						imageUrl={props.featureAImageUrl}
						description={props.featureADescription}
						action={props.featureAAction}
					/>
					<FeatureBox
						className="ptm-w-full lg:ptm-w-1/3"
						title={props.featureBTitle}
						imageUrl={props.featureBImageUrl}
						description={props.featureBDescription}
						action={props.featureBAction}
					/>
					<FeatureBox
						className="ptm-w-full lg:ptm-w-1/3"
						title={props.featureCTitle}
						imageUrl={props.featureCImageUrl}
						description={props.featureCDescription}
						action={props.featureCAction}
					/>
				</div>
				<div className="ptm-grid ptm-gap-4 ptm-py-8 ptm-px-4 ptm-mx-auto ptm-max-w-3xl ptm-text-xl">
					{props.pointA}
					{props.pointB}
					{props.pointC}
				</div>
			</div>
		</div>
	);
};

export default View;
