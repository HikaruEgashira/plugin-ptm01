import { RichText } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";
import React from "react";
import { ButtonLink } from "~/stories/Button";
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
			cardAImageUrl={attributes.cardAImageUrl}
			cardAButton={
				<ButtonLink url={attributes.cardAUrl} rounded>
					<RichText.Content tagName="span" value={attributes.cardALabel} />
				</ButtonLink>
			}
			cardBTitle={
				<RichText.Content tagName="span" value={attributes.cardBTitle} />
			}
			cardBDescription={
				<RichText.Content tagName="span" value={attributes.cardBDescription} />
			}
			cardBImageUrl={attributes.cardBImageUrl}
			cardBButton={
				<ButtonLink url={attributes.cardBUrl} rounded>
					<RichText.Content tagName="span" value={attributes.cardBLabel} />
				</ButtonLink>
			}
		/>
	);
};

export default View;
