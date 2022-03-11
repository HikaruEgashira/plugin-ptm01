import * as React from "react";
import type { Attribute } from ".";
import type { BlockEditProps } from "@wordpress/blocks";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { ToggleControl } from "@wordpress/components";
import { Button } from "~/stories/Button";

const Edit: React.FC<BlockEditProps<Attribute>> = ({
	attributes,
	setAttributes,
}) => {
	const onChangeText = (newText: string) => {
		setAttributes({ title: newText });
	};
	const setOutline = (newOutline: boolean) => {
		setAttributes({ outline: newOutline });
	};

	return (
		<>
			<InspectorControls key="setting">
				<div className="p-4 grid gap-4">
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							Outline(Not Supported)
						</legend>
						<ToggleControl checked={attributes.outline} onChange={setOutline} />
					</fieldset>
				</div>
			</InspectorControls>
			<Button {...useBlockProps()} outline={attributes.outline}>
				<RichText value={attributes.title} onChange={onChangeText} />
			</Button>
		</>
	);
};

export default Edit;
