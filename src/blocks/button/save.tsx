import * as React from "react";
import type { BlockSaveProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import { RichText, useBlockProps } from "@wordpress/block-editor";

const Save: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content tagName="div" value={attributes.title} />
		</div>
	);
};

export default Save;
