import React from "react";
import MainVisual from "~/stories/parts/MainVisual";
import type { BlockSaveProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import "~/stories/parts/mainvisual.css";
import { RichText } from "@wordpress/block-editor";
import { ButtonLink } from "~/stories/Button";

const View: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	return (
		<MainVisual
			title={<RichText.Content tagName="span" value={attributes.title} />}
			leftButton={
				<ButtonLink url={attributes.leftButtonUrl} rounded>
					<RichText.Content tagName="span" value={attributes.leftButtonLabel} />
				</ButtonLink>
			}
			rightButton={
				<ButtonLink url={attributes.rightButtonUrl} rounded outline>
					<RichText.Content
						tagName="span"
						value={attributes.rightButtonLabel}
					/>
				</ButtonLink>
			}
			movieUrl={attributes.movieUrl}
		/>
	);
};

export default View;
