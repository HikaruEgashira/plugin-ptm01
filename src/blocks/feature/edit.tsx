import { InspectorControls, RichText } from "@wordpress/block-editor";
import { BlockEditProps } from "@wordpress/blocks";
import { TextControl } from "@wordpress/components";
import React from "react";
import Feature from "~/stories/parts/Feature";
import { Attribute } from ".";

const View: React.FC<BlockEditProps<Attribute>> = ({
	attributes,
	setAttributes,
}) => {
	return (
		<>
			<InspectorControls key="setting">
				<div className="p-4 grid gap-4">
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							featureAImageUrl
						</legend>
						<TextControl
							value={attributes.featureAImageUrl}
							onChange={(value) => setAttributes({ featureAImageUrl: value })}
						/>
					</fieldset>
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							featureAActionUrl
						</legend>
						<TextControl
							value={attributes.featureAActionUrl}
							onChange={(value) => setAttributes({ featureAActionUrl: value })}
						/>
					</fieldset>

					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							featureBImageUrl
						</legend>
						<TextControl
							value={attributes.featureBImageUrl}
							onChange={(value) => setAttributes({ featureBImageUrl: value })}
						/>
					</fieldset>
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							featureBActionUrl
						</legend>
						<TextControl
							value={attributes.featureBActionUrl}
							onChange={(value) => setAttributes({ featureBActionUrl: value })}
						/>
					</fieldset>

					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							featureCImageUrl
						</legend>
						<TextControl
							value={attributes.featureCImageUrl}
							onChange={(value) => setAttributes({ featureCImageUrl: value })}
						/>
					</fieldset>
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							featureCActionUrl
						</legend>
						<TextControl
							value={attributes.featureCActionUrl}
							onChange={(value) => setAttributes({ featureCActionUrl: value })}
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<Feature
				title={
					<RichText
						tagName="span"
						value={attributes.title}
						onChange={(value) => setAttributes({ title: value })}
					/>
				}
				subTitle={
					<RichText
						tagName="span"
						value={attributes.subTitle}
						onChange={(value) => setAttributes({ subTitle: value })}
					/>
				}
				featureATitle={
					<RichText
						tagName="span"
						value={attributes.featureATitle}
						onChange={(value) => setAttributes({ featureATitle: value })}
					/>
				}
				featureADescription={
					<RichText
						tagName="span"
						value={attributes.featureADescription}
						onChange={(value) => setAttributes({ featureADescription: value })}
					/>
				}
				featureAImageUrl={attributes.featureAImageUrl}
				featureAActoinLabel={
					<RichText
						tagName="span"
						value={attributes.featureAActoinLabel}
						onChange={(value) => setAttributes({ featureAActoinLabel: value })}
					/>
				}
				featureAActionUrl={attributes.featureAActionUrl}
				featureBTitle={
					<RichText
						tagName="span"
						value={attributes.featureBTitle}
						onChange={(value) => setAttributes({ featureBTitle: value })}
					/>
				}
				featureBDescription={
					<RichText
						tagName="span"
						value={attributes.featureBDescription}
						onChange={(value) => setAttributes({ featureBDescription: value })}
					/>
				}
				featureBImageUrl={attributes.featureBImageUrl}
				featureBActoinLabel={
					<RichText
						tagName="span"
						value={attributes.featureBActoinLabel}
						onChange={(value) => setAttributes({ featureBActoinLabel: value })}
					/>
				}
				featureBActionUrl={attributes.featureBActionUrl}
				featureCTitle={
					<RichText
						tagName="span"
						value={attributes.featureCTitle}
						onChange={(value) => setAttributes({ featureCTitle: value })}
					/>
				}
				featureCDescription={
					<RichText
						tagName="span"
						value={attributes.featureCDescription}
						onChange={(value) => setAttributes({ featureCDescription: value })}
					/>
				}
				featureCImageUrl={attributes.featureCImageUrl}
				featureCActoinLabel={
					<RichText
						tagName="span"
						value={attributes.featureCActoinLabel}
						onChange={(value) => setAttributes({ featureCActoinLabel: value })}
					/>
				}
				featureCActionUrl={attributes.featureCActionUrl}
				pointA={
					<RichText
						tagName="span"
						value={attributes.pointA}
						onChange={(value) => setAttributes({ pointA: value })}
					/>
				}
				pointB={
					<RichText
						tagName="span"
						value={attributes.pointB}
						onChange={(value) => setAttributes({ pointB: value })}
					/>
				}
				pointC={
					<RichText
						tagName="span"
						value={attributes.pointC}
						onChange={(value) => setAttributes({ pointC: value })}
					/>
				}
			/>
		</>
	);
};

export default View;
