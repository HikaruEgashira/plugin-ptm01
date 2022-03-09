import * as React from "react";
import type { BlockSaveProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import { RichText } from "@wordpress/block-editor";

const Save: React.FC<BlockSaveProps<Attribute>> = (props) => {
	return (
		<h2 className="bg-red-300 text-red-500 font-bold">
			<RichText.Content tagName="p" value={props.attributes.title} />
		</h2>
	);
};

export default Save;
