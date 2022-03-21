import * as React from "react";
import type { Attribute } from ".";
import type { BlockEditProps } from "@wordpress/blocks";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { TextControl, ToggleControl } from "@wordpress/components";
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
	const setHref = (newHref: string) => {
		setAttributes({ href: newHref });
	};

	return (
		<>
			<InspectorControls key="setting">
				<div className="ptm-p-4 ptm-grid ptm-gap-4">
					<fieldset className="ptm-grid ptm-gap-2">
						<legend className="blocks-base-control__label">Outline</legend>
						<ToggleControl checked={attributes.outline} onChange={setOutline} />
						<legend className="blocks-base-control__label">Link</legend>
						<TextControl value={attributes.href} onChange={setHref} />
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
