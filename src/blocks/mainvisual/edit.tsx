import React from "react";
import { Button } from "~/stories/Button";
import type { BlockEditProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import "./mainvisual.css";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

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

			<div className="bg-[#F3F4F8] p-14 grid gap-14">
				<div className="font-bold text-5xl max-w-4xl mx-auto">
					<RichText value={attributes.title} onChange={onChangeTitle} />
				</div>
				<div className="flex gap-4 place-content-center">
					<Button>
						<RichText
							value={attributes.leftButtonLabel}
							onChange={onChangeLButton}
						/>
					</Button>
					<Button outline>
						<RichText
							value={attributes.rightButtonLabel}
							onChange={onChangeRButton}
						/>
					</Button>
				</div>
				<div>
					<iframe
						className="px-10 mx-auto"
						width={800}
						height={450}
						src="https://www.youtube.com/embed/q7s81feOwmM?controls=0"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</>
	);
};

export default View;
