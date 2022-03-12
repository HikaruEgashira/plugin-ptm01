import React from "react";
import MainVisual, { StyledButton } from "~/stories/parts/MainVisual";
import type { BlockSaveProps } from "@wordpress/blocks";
import type { Attribute } from ".";
import "~/stories/parts/mainvisual.css";
import { RichText } from "@wordpress/block-editor";

const View: React.FC<BlockSaveProps<Attribute>> = ({ attributes }) => {
	return (
		<MainVisual
			title={<RichText.Content tagName="span" value={attributes.title} />}
			leftButton={
				<StyledButton
					label={
						<RichText.Content
							tagName="span"
							value={attributes.leftButtonLabel}
						/>
					}
					url={attributes.leftButtonUrl}
				/>
			}
			rightButton={
				<StyledButton
					label={
						<RichText.Content
							tagName="span"
							value={attributes.rightButtonLabel}
						/>
					}
					url={attributes.rightButtonUrl}
					outline
				/>
			}
		/>
	);
};

export default View;
