import { RichText } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";
import React from "react";
import Problems from "~/stories/parts/Problems";
import { Attribute } from ".";

const View: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	return (
		<Problems
			title={<RichText.Content tagName="span" value={attributes.title} />}
			problemATitle={
				<RichText.Content tagName="span" value={attributes.problemATitle} />
			}
			problemADescription={
				<RichText.Content
					tagName="span"
					value={attributes.problemADescription}
				/>
			}
			problemAImageUrl={attributes.problemAImageUrl}
			problemBTitle={
				<RichText.Content tagName="span" value={attributes.problemBTitle} />
			}
			problemBDescription={
				<RichText.Content
					tagName="span"
					value={attributes.problemBDescription}
				/>
			}
			problemBImageUrl={attributes.problemBImageUrl}
			problemCTitle={
				<RichText.Content tagName="span" value={attributes.problemCTitle} />
			}
			problemCDescription={
				<RichText.Content
					tagName="span"
					value={attributes.problemCDescription}
				/>
			}
			problemCImageUrl={attributes.problemCImageUrl}
			problemDTitle={
				<RichText.Content tagName="span" value={attributes.problemDTitle} />
			}
			problemDDescription={
				<RichText.Content
					tagName="span"
					value={attributes.problemDDescription}
				/>
			}
			problemDImageUrl={attributes.problemDImageUrl}
			bottomTitle={
				<RichText.Content tagName="span" value={attributes.bottomTitle} />
			}
			bottomImageUrl={attributes.bottomImageUrl}
		/>
	);
};

export default View;
