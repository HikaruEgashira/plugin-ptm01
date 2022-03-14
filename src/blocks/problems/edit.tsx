import React from "react";
import Problems from "~/stories/parts/Problems";
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
				<div className="p-4 grid gap-4">
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							problemAImageUrl
						</legend>
						<TextControl
							value={attributes.problemAImageUrl}
							onChange={(value) => setAttributes({ problemAImageUrl: value })}
						/>
						<legend className="blocks-base-control__label">
							problemBImageUrl
						</legend>
						<TextControl
							value={attributes.problemBImageUrl}
							onChange={(value) => setAttributes({ problemBImageUrl: value })}
						/>
						<legend className="blocks-base-control__label">
							problemCImageUrl
						</legend>
						<TextControl
							value={attributes.problemCImageUrl}
							onChange={(value) => setAttributes({ problemCImageUrl: value })}
						/>
						<legend className="blocks-base-control__label">
							problemCImageUrl
						</legend>
						<TextControl
							value={attributes.problemCImageUrl}
							onChange={(value) => setAttributes({ problemCImageUrl: value })}
						/>
						<legend className="blocks-base-control__label">
							bottomImageUrl
						</legend>
						<TextControl
							value={attributes.bottomImageUrl}
							onChange={(value) => setAttributes({ bottomImageUrl: value })}
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<Problems
				title={
					<RichText
						value={attributes.title}
						onChange={(value) => setAttributes({ title: value })}
					/>
				}
				problemATitle={
					<RichText
						value={attributes.problemATitle}
						onChange={(value) => setAttributes({ problemATitle: value })}
					/>
				}
				problemADescription={
					<RichText
						value={attributes.problemADescription}
						onChange={(value) => setAttributes({ problemADescription: value })}
					/>
				}
				problemAImageUrl={attributes.problemAImageUrl}
				problemBTitle={
					<RichText
						value={attributes.problemBTitle}
						onChange={(value) => setAttributes({ problemBTitle: value })}
					/>
				}
				problemBDescription={
					<RichText
						value={attributes.problemBDescription}
						onChange={(value) => setAttributes({ problemBDescription: value })}
					/>
				}
				problemBImageUrl={attributes.problemBImageUrl}
				problemCTitle={
					<RichText
						value={attributes.problemCTitle}
						onChange={(value) => setAttributes({ problemCTitle: value })}
					/>
				}
				problemCDescription={
					<RichText
						value={attributes.problemCDescription}
						onChange={(value) => setAttributes({ problemCDescription: value })}
					/>
				}
				problemCImageUrl={attributes.problemCImageUrl}
				problemDTitle={
					<RichText
						value={attributes.problemDTitle}
						onChange={(value) => setAttributes({ problemDTitle: value })}
					/>
				}
				problemDDescription={
					<RichText
						value={attributes.problemDDescription}
						onChange={(value) => setAttributes({ problemDDescription: value })}
					/>
				}
				problemDImageUrl={attributes.problemDImageUrl}
				bottomTitle={
					<RichText
						value={attributes.bottomTitle}
						onChange={(value) => setAttributes({ bottomTitle: value })}
					/>
				}
				bottomImageUrl={attributes.bottomImageUrl}
			/>
		</>
	);
};

export default View;
