import React from "react";
import Flow from "~/stories/parts/Flow";
import type { BlockEditProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

const View: React.FC<BlockEditProps<Attribute>> = ({
	attributes,
	setAttributes,
}) => {
	return (
		<>
			<InspectorControls key="setting">
				<div className="ptm-p-4 ptm-grid ptm-gap-4">
					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">
							cardAImageUrl
						</legend>
						<TextControl
							value={attributes.cardAImageUrl}
							onChange={(value) => setAttributes({ cardAImageUrl: value })}
						/>
						<legend className="blocks-base-control__label">
							cardBImageUrl
						</legend>
						<TextControl
							value={attributes.cardBImageUrl}
							onChange={(value) => setAttributes({ cardBImageUrl: value })}
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<Flow
				cardATitle={
					<RichText
						value={attributes.cardATitle}
						onChange={(value) => setAttributes({ cardATitle: value })}
					/>
				}
				cardADescription={
					<RichText
						value={attributes.cardADescription}
						onChange={(value) => setAttributes({ cardADescription: value })}
					/>
				}
				cardALabel={
					<RichText
						value={attributes.cardALabel}
						onChange={(value) => setAttributes({ cardALabel: value })}
					/>
				}
				cardAImageUrl={attributes.cardAImageUrl}
				cardBTitle={
					<RichText
						value={attributes.cardBTitle}
						onChange={(value) => setAttributes({ cardBTitle: value })}
					/>
				}
				cardBDescription={
					<RichText
						value={attributes.cardBDescription}
						onChange={(value) => setAttributes({ cardBDescription: value })}
					/>
				}
				cardBLabel={
					<RichText
						value={attributes.cardBLabel}
						onChange={(value) => setAttributes({ cardBLabel: value })}
					/>
				}
				cardBImageUrl={attributes.cardBImageUrl}
			/>
		</>
	);
};

export default View;
