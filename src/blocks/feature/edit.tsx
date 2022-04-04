import { InspectorControls, RichText } from "@wordpress/block-editor";
import { BlockEditProps } from "@wordpress/blocks";
import { TextControl } from "@wordpress/components";
import React from "react";
import { Button } from "~/stories/Button";
import Feature from "~/stories/parts/Feature";
import { Attribute } from ".";

const View: React.FC<BlockEditProps<Attribute>> = ({
	attributes,
	setAttributes,
}) => {
	return (
		<>
			<InspectorControls key="setting">
				<div className="ptm-grid ptm-gap-4 ptm-p-4">
					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">
							featureAImageUrl
						</legend>
						<TextControl
							value={attributes.featureAImageUrl}
							onChange={(value) => setAttributes({ featureAImageUrl: value })}
						/>
					</fieldset>
					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">
							featureAActionUrl
						</legend>
						<TextControl
							value={attributes.featureAActionUrl}
							onChange={(value) => setAttributes({ featureAActionUrl: value })}
						/>
					</fieldset>

					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">
							featureBImageUrl
						</legend>
						<TextControl
							value={attributes.featureBImageUrl}
							onChange={(value) => setAttributes({ featureBImageUrl: value })}
						/>
					</fieldset>
					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">
							featureBActionUrl
						</legend>
						<TextControl
							value={attributes.featureBActionUrl}
							onChange={(value) => setAttributes({ featureBActionUrl: value })}
						/>
					</fieldset>

					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">
							featureCImageUrl
						</legend>
						<TextControl
							value={attributes.featureCImageUrl}
							onChange={(value) => setAttributes({ featureCImageUrl: value })}
						/>
					</fieldset>
					<fieldset className="ptm-grid ptm-gap-2">
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
				featureAAction={
					<Button>
						<RichText
							tagName="span"
							value={attributes.featureAAction}
							onChange={(value) => setAttributes({ featureAAction: value })}
						/>
					</Button>
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
				featureBAction={
					<Button>
						<RichText
							tagName="span"
							value={attributes.featureBAction}
							onChange={(value) => setAttributes({ featureBAction: value })}
						/>
					</Button>
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
				featureCAction={
					<Button>
						<RichText
							tagName="span"
							value={attributes.featureCAction}
							onChange={(value) => setAttributes({ featureCAction: value })}
						/>
					</Button>
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
