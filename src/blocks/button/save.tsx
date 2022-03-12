import * as React from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import type { BlockSaveProps } from "@wordpress/blocks";
import { Button } from "~/stories/Button";
import type { Attribute } from ".";

const Save: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	const blockProps = useBlockProps.save();

	return (
		<a href={attributes.href}>
			<Button
				{...blockProps}
				className="hover:shadow-2xl"
				outline={Boolean(attributes.outline)}
			>
				<RichText.Content tagName="span" value={attributes.title} />
			</Button>
		</a>
	);
};

export default Save;
