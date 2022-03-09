import * as React from 'react';
import type { Attribute } from '.';
import type { BlockEditProps } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

const Edit: React.FC<BlockEditProps<Attribute>> = (props) => {
	const onChangeText = (newText: string) => {
		props.setAttributes({ title: newText });
	};

	return (
		<div className="bg-red-300 text-red-500 font-bold">
			<RichText
				tagName="p"
				value={props.attributes.title}
				onChange={onChangeText}
			/>
		</div>
	);
};

export default Edit;
