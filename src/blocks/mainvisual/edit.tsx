import React from "react";
import { Button } from "~/stories/Button";
import MainVisual from "~/stories/parts/MainVisual";
import type { BlockEditProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import "~/stories/parts/mainvisual.css";

const View: React.FC<BlockEditProps<Attribute>> = ({
	attributes,
	setAttributes,
}) => {
	const onChangeTitle = (newText: string) => {
		setAttributes({ title: newText });
	};
	const onChangeLButton = (newText: string) => {
		setAttributes({ leftButtonLabel: newText });
	};
	const onChangeLUrl = (newText: string) => {
		setAttributes({ leftButtonUrl: newText });
	};
	const onChangeRButton = (newText: string) => {
		setAttributes({ rightButtonLabel: newText });
	};
	const onChangeRUrl = (newText: string) => {
		setAttributes({ rightButtonUrl: newText });
	};

	return (
		<>
			<InspectorControls key="setting">
				<div className="p-4 grid gap-4">
					<fieldset className="grid gap-2">
						<legend className="blocks-base-control__label">
							LeftButtonUrl
						</legend>
						<TextControl
							value={attributes.leftButtonUrl}
							onChange={onChangeLUrl}
						/>
						<legend className="blocks-base-control__label">
							RightButtonUrl
						</legend>
						<TextControl
							value={attributes.rightButtonUrl}
							onChange={onChangeRUrl}
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<MainVisual
				title={<RichText value={attributes.title} onChange={onChangeTitle} />}
				leftButton={
					<Button>
						<RichText
							value={attributes.leftButtonLabel}
							onChange={onChangeLButton}
						/>
					</Button>
				}
				rightButton={
					<Button outline>
						<RichText
							value={attributes.rightButtonLabel}
							onChange={onChangeRButton}
						/>
					</Button>
				}
			/>
		</>
	);
};

export default View;
