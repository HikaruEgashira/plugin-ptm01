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
		<>
			<div className="py-10 lg:px-10 max-w-5xl mx-auto">
				<div className="mt-10">
					<div className="px-4 flex items-center justify-center text-2xl h-64 text-white bg-[#0591A0]">
						{props.topTitle}
					</div>
					<div className="h-96 w-full overflow-hidden">
						<img
							className="object-cover hover:scale-125 transition-all duration-500"
							src={props.topImageUrl}
							alt="map"
						/>
					</div>
				</div>

				<div className="font-bold text-xl text-center pb-8">{props.title}</div>
				<div className="text-center font-bold">{props.subTitle}</div>
				<div className="flex items-center lg:items-start flex-col lg:flex-row w-full gap-4">
					<FeatureBox
						className="w-full max-w-sm lg:w-1/3"
						title={props.featureATitle}
						imageUrl={props.featureAImageUrl}
						description={props.featureADescription}
						actionLabel={props.featureAActoinLabel}
						actionUrl={props.featureAActionUrl}
					/>
					<FeatureBox
						className="w-full max-w-sm lg:w-1/3"
						title={props.featureBTitle}
						imageUrl={props.featureBImageUrl}
						description={props.featureBDescription}
						actionLabel={props.featureBActoinLabel}
						actionUrl={props.featureBActionUrl}
					/>
					<FeatureBox
						className="w-full max-w-sm lg:w-1/3"
						title={props.featureCTitle}
						imageUrl={props.featureCImageUrl}
						description={props.featureCDescription}
						actionLabel={props.featureCActoinLabel}
						actionUrl={props.featureCActionUrl}
					/>
				</div>
				<div className="max-w-xl mx-auto my-10 text-lg grid gap-2">
					{props.pointA}
					{props.pointB}
					{props.pointC}
				</div>
			</div>
		</>
	);
};

export default View;
