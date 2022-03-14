import { RichText } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";
import React from "react";
import Flow from "~/stories/parts/Flow";
import { Attribute } from ".";

const View: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	return (
		<Flow
			cardATitle={
				<RichText.Content tagName="span" value={attributes.cardATitle} />
			}
			cardADescription={
				<RichText.Content tagName="span" value={attributes.cardADescription} />
			}
			cardALabel={
				<RichText.Content tagName="span" value={attributes.cardALabel} />
			}
			cardAImageUrl={attributes.cardAImageUrl}
			cardBTitle={
				<RichText.Content tagName="span" value={attributes.cardBTitle} />
			}
			cardBDescription={
				<RichText.Content tagName="span" value={attributes.cardBDescription} />
			}
			cardBLabel={
				<RichText.Content tagName="span" value={attributes.cardBLabel} />
			}
			cardBImageUrl={attributes.cardBImageUrl}
		/>
	);
};

export default View;
