import React from "react";
import { Button } from "~/stories/Button";
import type { BlockSaveProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import "./mainvisual.css";
import { RichText } from "@wordpress/block-editor";

const TransitionButton: React.FC<{
	label: string;
	url: string;
	outline?: boolean;
}> = ({ label, url, outline = false }) => (
	<a href={url}>
		<Button outline={outline} className="hover:shadow-2xl transition-all">
			<RichText.Content tagName="span" value={label} />
		</Button>
	</a>
);

const View: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	return (
		<div className="bg-[#F3F4F8] p-14 grid gap-14">
			<div className="font-bold text-5xl max-w-4xl mx-auto">
				<RichText.Content tagName="span" value={attributes.title} />
			</div>
			<div className="flex gap-4 place-content-center">
				<TransitionButton
					label={attributes.leftButtonLabel}
					url={attributes.leftButtonUrl}
				/>
				<TransitionButton
					label={attributes.rightButtonLabel}
					url={attributes.rightButtonUrl}
					outline
				/>
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
	);
};

export default View;
