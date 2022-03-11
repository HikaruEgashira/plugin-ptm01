import * as React from "react";
import type { Attribute } from ".";
import type { BlockEditProps } from "@wordpress/blocks";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { ToggleControl } from "@wordpress/components";
import cn from "classnames";

const Edit: React.FC<BlockEditProps<Attribute>> = ({
	attributes,
	setAttributes,
}) => {
	const outline = false;
	const onChangeText = (newText: string) => {
		setAttributes({ title: newText });
	};

	return (
		<div
			{...useBlockProps()}
			className={cn(
				"py-3 px-4 text-center min-w-[10rem] font-bold rounded-full inline-block",
				{
					"border-2": outline,
					"border-[#192E5F]": outline,
					"bg-[#192E5F]": !outline,
					"text-white": !outline,
				}
			)}
		>
			<InspectorControls key="setting">
				<div className="p-4 grid gap-4">
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							Outline(Not Supported)
						</legend>
						<ToggleControl checked={outline} onChange={() => {}} />
					</fieldset>
				</div>
			</InspectorControls>
			<RichText value={attributes.title} onChange={onChangeText} />
		</div>
	);
};

export default Edit;
