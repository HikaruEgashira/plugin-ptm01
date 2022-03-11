import * as React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";
import { Button } from "~/stories/Button";
import type { Attribute } from ".";

const Save: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<Button outline={Boolean(attributes.outline)} {...blockProps}>
			<RichText.Content tagName="span" value={attributes.title} />
		</Button>
	);
};

export default Save;
