import { RichText } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";
import React from "react";
import { ButtonLink } from "~/stories/Button";
import Feature from "~/stories/parts/Feature";
import { Attribute } from ".";

const View: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	return (
		<Feature
			title={<RichText.Content tagName="span" value={attributes.title} />}
			subTitle={<RichText.Content tagName="span" value={attributes.subTitle} />}
			featureATitle={
				<RichText.Content tagName="span" value={attributes.featureATitle} />
			}
			featureADescription={
				<RichText.Content
					tagName="span"
					value={attributes.featureADescription}
				/>
			}
			featureAAction={
				<ButtonLink url={attributes.featureAActionUrl}>
					<RichText.Content tagName="span" value={attributes.featureAAction} />
				</ButtonLink>
			}
			featureAActionUrl={attributes.featureAActionUrl}
			featureAImageUrl={attributes.featureAImageUrl}
			featureBTitle={
				<RichText.Content tagName="span" value={attributes.featureBTitle} />
			}
			featureBDescription={
				<RichText.Content
					tagName="span"
					value={attributes.featureBDescription}
				/>
			}
			featureBAction={
				<ButtonLink url={attributes.featureBActionUrl}>
					<RichText.Content tagName="span" value={attributes.featureBAction} />
				</ButtonLink>
			}
			featureBActionUrl={attributes.featureBActionUrl}
			featureBImageUrl={attributes.featureBImageUrl}
			featureCTitle={
				<RichText.Content tagName="span" value={attributes.featureCTitle} />
			}
			featureCDescription={
				<RichText.Content
					tagName="span"
					value={attributes.featureCDescription}
				/>
			}
			featureCAction={
				<ButtonLink url={attributes.featureCActionUrl}>
					<RichText.Content tagName="span" value={attributes.featureCAction} />
				</ButtonLink>
			}
			featureCActionUrl={attributes.featureCActionUrl}
			featureCImageUrl={attributes.featureCImageUrl}
			pointA={<RichText.Content tagName="span" value={attributes.pointA} />}
			pointB={<RichText.Content tagName="span" value={attributes.pointB} />}
			pointC={<RichText.Content tagName="span" value={attributes.pointC} />}
		/>
	);
};

export default View;
