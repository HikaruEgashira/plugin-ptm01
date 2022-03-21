import React from "react";
import { FeatureBox } from "../FeatureBox";

export type Props = {
	topTitle: JSX.Element;
	topImageUrl: string;

	title: JSX.Element;
	subTitle: JSX.Element;

	featureATitle: JSX.Element;
	featureAImageUrl: string;
	featureADescription: JSX.Element;
	featureAActoinLabel: JSX.Element;
	featureAActionUrl: string;

	featureBTitle: JSX.Element;
	featureBImageUrl: string;
	featureBDescription: JSX.Element;
	featureBActoinLabel: JSX.Element;
	featureBActionUrl: string;

	featureCTitle: JSX.Element;
	featureCImageUrl: string;
	featureCDescription: JSX.Element;
	featureCActoinLabel: JSX.Element;
	featureCActionUrl: string;

	pointA: JSX.Element;
	pointB: JSX.Element;
	pointC: JSX.Element;
};

const View: React.FC<Props> = (props) => {
	return (
		<div className="ptm-bg-[#F3F7F8]">
			<div className="ptm-mb-10">
				<div className="ptm-px-4 ptm-flex ptm-items-center ptm-justify-center ptm-text-3xl ptm-font-bold ptm-h-96 ptm-text-white ptm-bg-[#0591A0]">
					{props.topTitle}
				</div>
				<div className="ptm-overflow-hidden">
					<img
						className="ptm-object-cover hover:ptm-scale-125 ptm-transition-all ptm-duration-300 ptm-h-96 ptm-w-full"
						src={props.topImageUrl}
						alt="map"
					/>
				</div>
			</div>
			<div className="ptm-container ptm-max-w-5xl ptm-mx-auto ptm-pb-8">
				<div className="ptm-font-bold ptm-text-2xl ptm-text-center ptm-pb-8">
					{props.title}
				</div>
				<div className="ptm-text-center ptm-font-bold">{props.subTitle}</div>
				<div className="ptm-flex ptm-items-center ptm-flex-col ptm-w-full ptm-gap-4">
					<FeatureBox
						className="ptm-w-full ptm-max-w-sm"
						title={props.featureATitle}
						imageUrl={props.featureAImageUrl}
						description={props.featureADescription}
						actionLabel={props.featureAActoinLabel}
						actionUrl={props.featureAActionUrl}
					/>
					<FeatureBox
						className="ptm-w-full ptm-max-w-sm"
						title={props.featureBTitle}
						imageUrl={props.featureBImageUrl}
						description={props.featureBDescription}
						actionLabel={props.featureBActoinLabel}
						actionUrl={props.featureBActionUrl}
					/>
					<FeatureBox
						className="ptm-w-full ptm-max-w-sm"
						title={props.featureCTitle}
						imageUrl={props.featureCImageUrl}
						description={props.featureCDescription}
						actionLabel={props.featureCActoinLabel}
						actionUrl={props.featureCActionUrl}
					/>
				</div>
				<div className="ptm-max-w-2xl ptm-mx-auto ptm-px-4 ptm-py-8 ptm-text-xl ptm-grid ptm-gap-4">
					{props.pointA}
					{props.pointB}
					{props.pointC}
				</div>
			</div>
		</div>
	);
};

export default View;
